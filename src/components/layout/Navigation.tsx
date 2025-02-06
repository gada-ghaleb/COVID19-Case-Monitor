import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  alt="COVID-19"
                  src="/logo192.png"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="rounded-md  hover:bg-gray-900 px-3 py-2 text-md font-medium text-white"
                >
                  Home
                </Link>
                <a
                  href="https://github.com/gada-ghaleb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-900 hover:text-white"
                >
                  GitHub Profile
                </a>
                <a
                  href="https://disease.sh/docs/#/COVID-19%3A%20Vaccine/get_v3_covid_19_vaccine_coverage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-900 hover:text-white"
                >
                  API
                </a>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            as={Link}
            to="/"
            className="block rounded-md text-white hover:bg-gray-900 px-3 py-2 text-base font-medium"
          >
            Home
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="https://github.com/gada-ghaleb"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-900 hover:text-white"
          >
            GitHub Profile
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="https://disease.sh/docs/#/COVID-19%3A%20Vaccine/get_v3_covid_19_vaccine_coverage"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-900 hover:text-white"
          >
            API
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
export default Navigation;
