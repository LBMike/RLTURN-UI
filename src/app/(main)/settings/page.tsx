"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { mockData } from "@/lib/mock-data";

function Toggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? "bg-[#0085FF]" : "bg-[var(--background-tertiary)]"
      }`}
      role="switch"
      aria-checked={enabled}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const { user } = mockData;
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <div className="max-w-2xl">
      {/* Header */}
      <h1 className="text-[2.25rem] font-bold leading-tight">Settings</h1>

      <div className="mt-8 space-y-6">
        {/* Profile Card */}
        <div className="border border-[var(--border)] rounded-[12px] p-6">
          <h3 className="font-semibold">Profile</h3>
          <div className="mt-4">
            <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--text-secondary)]">Name</span>
              <span className="text-sm font-medium">{user.name}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-[var(--text-secondary)]">Email</span>
              <span className="text-sm font-medium">{user.email}</span>
            </div>
          </div>
          <div className="mt-4">
            <button className="text-[#0085FF] text-sm font-medium hover:opacity-80 transition-opacity">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Security Card */}
        <div className="border border-[var(--border)] rounded-[12px] p-6">
          <h3 className="font-semibold">Security</h3>
          <div className="mt-4">
            <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--text-secondary)]">
                Two-Factor Authentication
              </span>
              <span className="text-xs font-medium text-[#22C55E] bg-[#22C55E]/10 rounded-full px-3 py-1">
                Enabled
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--text-secondary)]">Passkey</span>
              <span className="text-sm font-medium">Configured</span>
            </div>
            <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
              <span className="text-sm text-[var(--text-secondary)]">
                Change Password
              </span>
              <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
            </div>
          </div>
        </div>

        {/* Preferences Card */}
        <div className="border border-[var(--border)] rounded-[12px] p-6">
          <h3 className="font-semibold">Preferences</h3>
          <div className="mt-4">
            <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--text-secondary)]">Language</span>
              <span className="text-sm font-medium">English</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--text-secondary)]">Currency</span>
              <span className="text-sm font-medium">USD</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-[var(--text-secondary)]">Dark Mode</span>
              <Toggle enabled={darkMode} onToggle={() => setDarkMode(!darkMode)} />
            </div>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="border border-[var(--border)] rounded-[12px] p-6">
          <h3 className="font-semibold">Notifications</h3>
          <div className="mt-4">
            <div className="flex items-center justify-between py-3 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--text-secondary)]">
                Email Notifications
              </span>
              <Toggle
                enabled={emailNotifications}
                onToggle={() => setEmailNotifications(!emailNotifications)}
              />
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-[var(--text-secondary)]">
                Push Notifications
              </span>
              <Toggle
                enabled={pushNotifications}
                onToggle={() => setPushNotifications(!pushNotifications)}
              />
            </div>
          </div>
        </div>

        {/* Legal Card */}
        <div className="border border-[var(--border)] rounded-[12px] p-6">
          <h3 className="font-semibold">Legal</h3>
          <div className="mt-4">
            <div className="flex items-center justify-between py-3 border-b border-[var(--border)] cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
              <span className="text-sm text-[var(--text-secondary)]">
                Terms of Service
              </span>
              <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[var(--border)] cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
              <span className="text-sm text-[var(--text-secondary)]">
                Privacy Policy
              </span>
              <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
            </div>
            <div className="flex items-center justify-between py-3 cursor-pointer hover:bg-[var(--background-secondary)] transition-colors -mx-6 px-6">
              <span className="text-sm text-[var(--text-secondary)]">Compliance</span>
              <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
