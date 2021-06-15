import { BeakerIcon } from '@heroicons/react/solid'
import { HomeIcon } from '@heroicons/react/solid'
import { ChartPieIcon } from '@heroicons/react/solid'
import { FolderIcon } from '@heroicons/react/solid'
import { ArchiveIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/solid'

const Nav = () => {
  return (
    <div
      id="sidebar"
      className="h-screen w-16 menu bg-white text-white px-4 flex items-start static fixed shadow"
    >
      <ul className="list-reset my-32">
        <li className="my-2 md:my-0">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-blue-500 flex space-x-11"
          >
            <HomeIcon className="h-6 w-6 text-gray-300 hover:text-blue-500 my-2"/>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Home
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0 ">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-blue-500 flex space-x-11"
          >
            <ChartPieIcon className="h-6 w-6 text-gray-300 my-2 hover:text-blue-500"/>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Progress
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-blue-500 flex space-x-11"
          >
            <FolderIcon className="h-6 w-6 text-gray-300 my-2 hover:text-blue-500"/>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Files
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-blue-500 flex space-x-11"
          >
            <ArchiveIcon className="h-6 w-6 text-gray-300 my-2 hover:text-blue-500"/>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Folders
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-blue-500 flex space-x-10"
          >
            <TrashIcon className="h-6 w-6 text-gray-300 my-2 hover:text-blue-500"/>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Archive
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-blue-500 flex space-x-11 mt-64"
          >
            <CogIcon className="h-6 w-6 text-gray-300 my-2 hover:text-blue-500"/>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Settings
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-blue-500 flex space-x-11"
          >
            <LogoutIcon className="h-6 w-6 text-gray-300 my-2 hover:text-blue-500"/>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Log out
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
