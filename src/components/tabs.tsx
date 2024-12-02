import React, { Fragment } from "react";
import { cn } from "../utils/cn";

export interface Navigation {
  name: string;
  href: string;
  current: boolean;
}

const Tabs: React.FC<{
  a?: React.ElementType<any>;
  navigation: Navigation[];
  onChange?: (opts?: any) => void;
}> = ({ navigation, onChange, a: A }) => {
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
          onChange={(e) =>
            onChange
              ? onChange()
              : window.location.assign(
                  navigation.find(
                    (tab) =>
                      tab.name.toLowerCase() === e.target.value.toLowerCase(),
                  )?.href ?? "#",
                )
          }
          defaultValue={navigation.find((tab) => tab.current)?.name}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
        >
          {navigation.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {navigation.map((tab) => (
              <Fragment key={tab.name}>
                {A ? (
                  <A
                    href={tab.href}
                    aria-current={tab.current ? "page" : undefined}
                    className={cn(
                      tab.current
                        ? "border-gray-500 text-gray-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium",
                    )}
                  >
                    {tab.name}
                  </A>
                ) : (
                  <a
                    href={tab.href}
                    aria-current={tab.current ? "page" : undefined}
                    className={cn(
                      tab.current
                        ? "border-gray-500 text-gray-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium",
                    )}
                  >
                    {tab.name}
                  </a>
                )}
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

Tabs.displayName = "Tabs"; // Adding a display name for better debugging in React DevTools

export default Tabs;
