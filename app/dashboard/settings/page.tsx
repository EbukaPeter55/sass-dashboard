import {ProfileForm} from "@/app/dashboard/settings/components/profile-form";
import {ThemeToggle} from "@/app/dashboard/settings/components/theme-toggle";

export default function SettingsPage() {
    return (
        <div
            className="flex flex-col gap-8 p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Settings</h1>
            <ProfileForm/>
            <ThemeToggle/>
        </div>
    );
}
