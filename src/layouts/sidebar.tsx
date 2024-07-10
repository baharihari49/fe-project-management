import { useState } from "react";
import { MainMenuWorkspace } from "./workspaces/mainMenuWorkspace";
import { CreateProjects } from "./projects/creareNewProjects";

export const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen1, setSubDropdownOpen1] = useState(false);
  const [subDropdownOpen2, setSubDropdownOpen2] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSubDropdown1 = () => setSubDropdownOpen1(!subDropdownOpen1);
  const toggleSubDropdown2 = () => setSubDropdownOpen2(!subDropdownOpen2);

  return (
    <aside className="w-64 fixed mt-14 top-0 left-0 z-40 border h-screen bg-white">
      <div className="py-2">
        <div className="flex justify-between items-center px-2">
          <MainMenuWorkspace />
        </div>
        <div className="mt-5 mx-3 group">
          <div className="flex justify-between items-center">
            <p className="text-sm px-2 py-1">Project spaces</p>
            <div className="flex items-center gap-1">
              <div className="p-1 rounded-md hidden group-hover:block hover:bg-slate-100 cursor-pointer">
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M6 12h.01m6 0h.01m5.99 0h.01"
                  />
                </svg>
              </div>

              <div className="p-1 rounded-md hidden group-hover:block hover:bg-slate-100 cursor-pointer">
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <div className="rounded-md hidden group-hover:block hover:bg-slate-100 cursor-pointer">
                <CreateProjects/>
              </div>
            </div>
          </div>
          <div className="flex justify-between rounded-md px-2 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-300">
            <div
              className="flex items-center w-full gap-1"
              onClick={toggleDropdown}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="text-sm font-medium py-1">Project Management</p>
              <svg
                className={`w-4 h-4 ml-auto transform transition-transform duration-300 group-hover:hidden ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="border p-1 hidden group-hover:block rounded-md transition-all duration-300">
              <svg
                className="w-4 h-4 ml-auto text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </div>
          </div>
          {dropdownOpen && (
            <div className="ml-6 mt-2">
              <div
                className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-300"
                onClick={toggleSubDropdown1}
              >
                <p className="text-sm font-medium">Sub-item 1</p>
                <svg
                  className={`w-4 h-4 ml-auto transform transition-transform duration-300 ${
                    subDropdownOpen1 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {subDropdownOpen1 && (
                <div className="ml-6 mt-2">
                  <div className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-300">
                    <p className="text-sm font-medium">Nested Sub-item 1.1</p>
                  </div>
                  <div className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-300">
                    <p className="text-sm font-medium">Nested Sub-item 1.2</p>
                  </div>
                </div>
              )}
              <div
                className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-300"
                onClick={toggleSubDropdown2}
              >
                <p className="text-sm font-medium">Sub-item 2</p>
                <svg
                  className={`w-4 h-4 ml-auto transform transition-transform duration-300 ${
                    subDropdownOpen2 ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {subDropdownOpen2 && (
                <div className="ml-6 mt-2">
                  <div className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-300">
                    <p className="text-sm font-medium">Nested Sub-item 2.1</p>
                  </div>
                  <div className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-gray-100 cursor-pointer transition-all duration-300">
                    <p className="text-sm font-medium">Nested Sub-item 2.2</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
