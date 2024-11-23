import React from "react";
import { cn } from "../utils/cn";

export interface Navigation {
  name: string;
  href: string;
  current: boolean;
}

const Tabs: React.FC<{ navigation: Navigation[] }> = ({ navigation }) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          defaultValue={navigation.find((tab) => tab.current)?.name}
          className="block w-full rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500"
        >
          {navigation.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {navigation.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? "page" : undefined}
              className={cn(
                tab.current
                  ? "bg-gray-100 text-gray-700"
                  : "text-gray-500 hover:text-gray-700",
                "rounded-md px-3 py-2 text-sm font-medium",
              )}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

Tabs.displayName = "Tabs"; // Adding a display name for better debugging in React DevTools

export default Tabs;
