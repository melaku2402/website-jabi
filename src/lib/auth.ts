"use server";

/**
 * Real authentication backed by Prisma + an httpOnly, server-validated
 * session cookie.
 *
 * Design notes:
 * - Passwords are hashed with bcrypt (never stored or compared in plain text).
 * - Sessions are opaque random tokens stored in the AdminSession table, not
 *   stateless JWTs — this lets a session be revoked instantly (logout, or an
 *   admin disabling an account) rather than waiting out a token's expiry.
 * - The cookie itself is httpOnly + secure + sameSite=lax, so it can't be
 *   read or set from client JavaScript. This file only runs on the server
 *   (file-level "use server" makes every export here a Server Action), so
 *   client components can still import and call these functions directly —
 *   Next.js handles the client/server boundary.
 * - Route protection happens in `src/app/admin/(protected)/layout.tsx` via
 *   getSessionUser(), not in middleware — Prisma's Node.js driver doesn't
 *   run on the Edge runtime that middleware uses by default.
 */

import { cookies } from "next/headers";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import type { AdminUser as AdminUserDTO } from "@/types/admin";
import type { AdminUser as AdminUserRow } from "@prisma/client";

const SESSION_COOKIE = "jabi_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
const BCRYPT_ROUNDS = 12;

function toDTO(user: AdminUserRow): AdminUserDTO {
  const roleLabels: Record<AdminUserRow["role"], string> = {
    super_admin: "Super Admin",
    admin: "Admin",
    editor: "Editor",
  };

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    roleLabel: roleLabels[user.role],
    avatar: user.avatar,
    status: user.status,
    lastLogin: (user.lastLogin ?? user.createdAt).toISOString(),
  };
}

export interface LoginResult {
  success: boolean;
  message: string;
  user?: AdminUserDTO;
}

/**
 * Verifies credentials against the database and, on success, creates a
 * server-side session and sets the httpOnly cookie referencing it.
 */
export async function login(email: string, password: string): Promise<LoginResult> {
  const normalizedEmail = email.trim().toLowerCase();

  const user = await prisma.adminUser.findUnique({ where: { email: normalizedEmail } });

  // Compare against a dummy hash even when no user is found, so responses
  // for "unknown email" and "wrong password" take a similar amount of time
  // (a basic mitigation against user-enumeration via timing).
  const passwordHash = user?.passwordHash ?? "$2a$12$invalidsaltinvalidsaltinvalidsaltuu";
  const passwordMatches = await bcrypt.compare(password, passwordHash);

  if (!user || !passwordMatches) {
    return { success: false, message: "Invalid email or password. Please try again." };
  }

  if (user.status === "inactive") {
    return { success: false, message: "This account has been deactivated. Contact a super admin." };
  }

  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);

  await prisma.$transaction([
    prisma.adminSession.create({ data: { token, userId: user.id, expiresAt } }),
    prisma.adminUser.update({ where: { id: user.id }, data: { lastLogin: new Date() } }),
  ]);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });

  return { success: true, message: "Login successful.", user: toDTO(user) };
}

/** Invalidates the current session on the server and clears the cookie. */
export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (token) {
    await prisma.adminSession.deleteMany({ where: { token } }).catch(() => {
      // Session row may already be gone (expired cleanup, etc.) — not an error.
    });
  }

  cookieStore.delete(SESSION_COOKIE);
}

/**
 * Resolves the current session cookie to a user, validating expiry against
 * the database. Returns null for no cookie, an unknown/expired token, or a
 * deactivated account. This is the single source of truth route protection
 * relies on — never trust a client-supplied claim of who's logged in.
 */
export async function getSessionUser(): Promise<AdminUserDTO | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const session = await prisma.adminSession.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date() || session.user.status === "inactive") {
    return null;
  }

  return toDTO(session.user);
}
