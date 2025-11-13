"use client";

// import { useState } from "react";
import ProfileHeader from "@/components/molecules/customers/profiles/ProfileHeader";
import PersonalInfoForm from "@/components/molecules/customers/profiles/PersonalInfoForm";
import SecuritySettingsForm from "@/components/molecules/customers/profiles/SecurityForm";
import AccountOverview from "@/components/molecules/customers/profiles/AccountOverview";
import PreferencesCard from "@/components/molecules/customers/profiles/PreferenceCard";
import QuickActionsCard from "@/components/molecules/customers/profiles/QuickActionCard";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-sm text-gray-500">Manage your profile information and security settings</p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
        <ProfileHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2 space-y-8">
            <PersonalInfoForm />
            <SecuritySettingsForm />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <AccountOverview />
            <PreferencesCard />
            <QuickActionsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
