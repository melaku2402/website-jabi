"use client";

import { useState } from "react";
import { Save, Check, Globe, Phone, Share2, Palette, Search } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { websiteSettingsData } from "@/data/admin/settings";
import { cn } from "@/lib/utils";

const sections = [
  { id: "general", label: "General Settings", icon: Globe },
  { id: "contact", label: "Contact Information", icon: Phone },
  { id: "social", label: "Social Media", icon: Share2 },
  { id: "branding", label: "Website Branding", icon: Palette },
  { id: "seo", label: "SEO Settings", icon: Search },
] as const;

function Field({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-text-primary">{label}</label>
      {multiline ? (
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-border-subtle px-3 py-2.5 text-sm text-text-primary focus:border-blue-600 focus:outline-none"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-border-subtle px-3 py-2.5 text-sm text-text-primary focus:border-blue-600 focus:outline-none"
        />
      )}
    </div>
  );
}

export default function SettingsPage() {
  const [settings, setSettings] = useState(websiteSettingsData);
  const [active, setActive] = useState<(typeof sections)[number]["id"]>("general");
  const [saved, setSaved] = useState(false);

  function update<K extends keyof typeof settings>(
    section: K,
    key: keyof (typeof settings)[K],
    value: string
  ) {
    setSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <AdminPageHeader
        title="Website Settings"
        description="Manage general information, branding and SEO for the public website."
        actionLabel={saved ? "Saved!" : "Save Changes"}
        ActionIcon={saved ? Check : Save}
        onAction={handleSave}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/* Section nav */}
        <div className="rounded-xl border border-border-subtle bg-surface p-3 shadow-sm lg:col-span-1">
          <nav className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActive(section.id)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                    active === section.id
                      ? "bg-blue-900 text-white"
                      : "text-text-primary hover:bg-surface-muted"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Section content */}
        <div className="rounded-xl border border-border-subtle bg-surface p-6 shadow-sm lg:col-span-3">
          {active === "general" && (
            <div className="space-y-4">
              <Field label="Website Name" value={settings.general.websiteName} onChange={(v) => update("general", "websiteName", v)} />
              <Field label="Tagline" value={settings.general.tagline} onChange={(v) => update("general", "tagline", v)} />
              <Field label="Email" value={settings.general.email} onChange={(v) => update("general", "email", v)} />
              <Field label="Phone" value={settings.general.phone} onChange={(v) => update("general", "phone", v)} />
              <Field label="Address" value={settings.general.address} onChange={(v) => update("general", "address", v)} />
            </div>
          )}

          {active === "contact" && (
            <div className="space-y-4">
              <Field label="Phone" value={settings.contact.phone} onChange={(v) => update("contact", "phone", v)} />
              <Field label="Email" value={settings.contact.email} onChange={(v) => update("contact", "email", v)} />
              <Field label="Office Address" value={settings.contact.officeAddress} onChange={(v) => update("contact", "officeAddress", v)} />
              <Field label="Working Hours" value={settings.contact.workingHours} onChange={(v) => update("contact", "workingHours", v)} />
            </div>
          )}

          {active === "social" && (
            <div className="space-y-4">
              <Field label="Facebook" value={settings.social.facebook} onChange={(v) => update("social", "facebook", v)} />
              <Field label="Twitter / X" value={settings.social.twitter} onChange={(v) => update("social", "twitter", v)} />
              <Field label="LinkedIn" value={settings.social.linkedin} onChange={(v) => update("social", "linkedin", v)} />
              <Field label="YouTube" value={settings.social.youtube} onChange={(v) => update("social", "youtube", v)} />
            </div>
          )}

          {active === "branding" && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/home/logo.png" alt="Current logo" className="h-16 w-16 rounded-full border border-border-subtle" />
                <button className="rounded-lg border border-border-subtle px-4 py-2 text-sm font-semibold text-text-primary hover:bg-surface-muted">
                  Upload New Logo
                </button>
              </div>
              <Field label="Logo URL" value={settings.branding.logoUrl} onChange={(v) => update("branding", "logoUrl", v)} />
              <Field label="Favicon URL" value={settings.branding.faviconUrl} onChange={(v) => update("branding", "faviconUrl", v)} />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">Primary Color</label>
                  <div className="flex items-center gap-2">
                    <span
                      className="h-9 w-9 shrink-0 rounded-lg border border-border-subtle"
                      style={{ backgroundColor: settings.branding.primaryColor }}
                    />
                    <input
                      value={settings.branding.primaryColor}
                      onChange={(e) => update("branding", "primaryColor", e.target.value)}
                      className="w-full rounded-lg border border-border-subtle px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">Secondary Color</label>
                  <div className="flex items-center gap-2">
                    <span
                      className="h-9 w-9 shrink-0 rounded-lg border border-border-subtle"
                      style={{ backgroundColor: settings.branding.secondaryColor }}
                    />
                    <input
                      value={settings.branding.secondaryColor}
                      onChange={(e) => update("branding", "secondaryColor", e.target.value)}
                      className="w-full rounded-lg border border-border-subtle px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "seo" && (
            <div className="space-y-4">
              <Field label="Meta Title" value={settings.seo.metaTitle} onChange={(v) => update("seo", "metaTitle", v)} />
              <Field label="Meta Description" value={settings.seo.metaDescription} onChange={(v) => update("seo", "metaDescription", v)} multiline />
              <Field label="Keywords" value={settings.seo.keywords} onChange={(v) => update("seo", "keywords", v)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
