import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,

} from "@heroicons/react/24/outline";
import Dashboard from "../dashboard/Dashboard";


const navigation = [
  { name: 'Dashboard', href: '/Dashboard', icon: HomeIcon, current: true },
 
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <>
      {/* Mobile Sidebar */}
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="relative flex w-full max-w-xs transform transition duration-300 ease-in-out bg-gray-800 px-6 pb-4">
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto">
              <div className="flex h-16 shrink-0 items-center">
                <img alt="COVID-19" src="logo192.png" className="h-8 w-auto" />
                <p className="text-white font-semibold pl-4">COVID-19</p>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-50 text-gray-800"
                            : "text-white hover:bg-gray-50 hover:text-gray-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-600"
                              : "text-white group-hover:text-gray-600",
                            "size-6 shrink-0"
                          )}
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li className="mt-auto">
                    <a
                      href="https://github.com/tuo-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold text-white hover:bg-gray-50 hover:text-gray-600"
                    >
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub"
                        className="w-6 h-6 shrink-0 rounded-md"
                      />
                      <span>GitHub Profile</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col bg-gray-800 border-r border-gray-200">
        <div className="flex grow flex-col gap-y-5 px-6 pb-4 overflow-y-auto">
          <div className="flex h-16 items-center">
            <img alt="COVID-19" src="logo192.png" className="h-8 w-auto" />
            <p className="text-white font-semibold pl-4">COVID-19</p>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-gray-800"
                        : "text-white hover:bg-gray-50 hover:text-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-600"
                          : "text-white group-hover:text-gray-600",
                        "size-6 shrink-0"
                      )}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="mt-auto">
                <a
                  href="https://github.com/tuo-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold text-white hover:bg-gray-50 hover:text-gray-600"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className="w-6 h-6 shrink-0 rounded-md"
                  />
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 items-center bg-white px-4 border-b border-gray-200 shadow-sm">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-800 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <main className="py-4">
          <div className="px-4 sm:px-6 lg:px-8">
            {activeSection === "Dashboard" && <Dashboard />}
          </div>
        </main>
      </div>
    </>
  );
}
