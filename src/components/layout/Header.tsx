
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  UserPlus,
  Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { mainNavLinks, siteContact } from "@/data/site-config";

/**
 * Normalizes locale paths (e.g., /en/about -> /about, /en -> /)
 * before matching active state.
 */
function isActivePath(pathname: string, href: string) {
  if (!pathname) return false;

  // Strip 2-letter locale prefix (e.g., /en/about -> /about, /en -> /)
  const normalizedPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/") || "/";

  const cleanPath = normalizedPath.replace(/\/$/, "") || "/";
  const cleanHref = href.replace(/\/$/, "") || "/";

  if (cleanHref === "/") {
    return cleanPath === "/";
  }

  return cleanPath === cleanHref || cleanPath.startsWith(`${cleanHref}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if current route is the Home page
  const isHome = isActivePath(pathname, "/");

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, pathname]);

  const transparent = isHome && !scrolled;
  const closeMobile = () => setMobileOpen(false);

  const navLinkClass = (active: boolean) => {
    const colorClass = transparent
      ? active
        ? "!text-emerald-400 font-extrabold drop-shadow-md"
        : "!text-white/90 hover:!text-white drop-shadow-md"
      : active
        ? "!text-emerald-600 font-extrabold"
        : "!text-gray-600 hover:!text-blue-950";

    return `relative flex items-center gap-1 py-5 text-sm font-bold tracking-wide transition-colors ${colorClass}`;
  };

  const underlineClass = transparent ? "bg-emerald-400" : "bg-emerald-500";

  return (
    <header className={`${isHome ? "fixed" : "sticky"} inset-x-0 top-0 z-50`}>
      {/* Top info bar */}
      <div
        className={`hidden text-xs text-blue-100 transition-colors duration-300 md:block ${
          transparent ? "bg-black/20 backdrop-blur-sm" : "bg-blue-950"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              {siteContact.address}
            </span>
            {siteContact.phones.map((phone) => (
              <span key={phone} className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                {phone}
              </span>
            ))}
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-emerald-400" />
              {siteContact.email}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-blue-100 hover:text-white">
              English <ChevronDown className="h-3 w-3" />
            </button>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-emerald-400"
              >
                <Facebook className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-emerald-400"
              >
                <Twitter className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-emerald-400"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-colors duration-300 ${
          transparent
            ? "bg-transparent"
            : "border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/home/logo.png"
              alt="Jabi Cooperatives logo"
              width={250}
              height={250}
              className="h-16 w-16 object-contain"
              priority
            />
            <div className="leading-tight">
              <p
                className={`text-lg font-bold transition-colors ${
                  transparent ? "text-white" : "text-blue-950"
                }`}
              >
                JABI COOPERATIVES
              </p>
              <p className="text-[12px] font-semibold tracking-wide text-emerald-400">
                SAVING &amp; CREDIT UNION S.C
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {mainNavLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={navLinkClass(active)}
                >
                  {link.label}
                  {active && (
                    <span
                      className={`absolute inset-x-0 bottom-1 h-0.5 rounded-full ${underlineClass}`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex">
            <Button
              variant="primary"
              className="group relative gap-2 overflow-hidden active:scale-[0.98]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                Become a Member <UserPlus className="h-4 w-4" />
              </span>
            </Button>
          </div>

          <button
            className={`lg:hidden rounded-md border p-2 transition ${
              transparent
                ? "border-white/40 text-white"
                : "border-gray-200 text-blue-950"
            }`}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={closeMobile}
        >
          <nav
            className="ml-auto flex h-full w-[min(85vw,380px)] flex-col border-l border-white/10 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 p-5 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <Link
                href="/"
                onClick={closeMobile}
                className="flex items-center gap-3"
              >
                <Image
                  src="/images/home/logo.png"
                  alt="Jabi Cooperatives logo"
                  width={120}
                  height={120}
                  className="h-12 w-12 object-contain"
                />
                <div className="leading-tight">
                  <p className="text-base font-bold">JABI COOPERATIVES</p>
                  <p className="text-[11px] text-emerald-400">
                    SAVING &amp; CREDIT UNION S.C
                  </p>
                </div>
              </Link>
              <button
                type="button"
                onClick={closeMobile}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto">
              <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                  Quick Access
                </p>
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold transition hover:border-emerald-400/40 hover:bg-white/10"
                >
                  <HomeIcon className="h-4 w-4 text-emerald-400" />
                  Home
                </Link>
              </div>

              <div className="space-y-1">
                {mainNavLinks.map((link) => {
                  const active = isActivePath(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className={`block rounded-xl px-3 py-3 text-sm font-semibold transition ${
                        active
                          ? "border-l-4 border-emerald-400 bg-emerald-500/15 text-emerald-400 font-bold"
                          : "text-white/85 hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Button
              variant="primary"
              onClick={closeMobile}
              className="mt-3 w-full justify-center gap-2"
            >
              Become a Member <UserPlus className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}