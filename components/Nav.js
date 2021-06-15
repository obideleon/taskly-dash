import {
  HomeIcon,
  ChartPieIcon,
  FolderIcon,
  ArchiveIcon,
  TrashIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

const Nav = () => {
  return (
    <div
      id="sidebar"
      className="h-screen w-20 menu bg-white text-white px-6 flex items-start static fixed shadow"
    >
      <ul className="list-reset my-28">
        <li className="my-2 md:my-0 text-gray-50 hover:text-blue-200">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline flex space-x-11"
          >
            <HomeIcon className="h-6 w-6 my-2 opacity-80" />
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Home
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0 text-gray-50 hover:text-blue-200">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline flex space-x-11"
          >
            <ChartPieIcon className="h-6 w-6 my-2 opacity-80" />
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Progress
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0 text-gray-50 hover:text-blue-200">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
          >
            <FolderIcon className="h-6 w-6 my-2 opacity-80" />
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Files
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0 text-gray-50 hover:text-blue-200">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
          >
            <ArchiveIcon className="h-6 w-6 my-2 opacity-80" />
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Folders
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0 text-gray-50 hover:text-blue-200">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-10"
          >
            <TrashIcon className="h-6 w-6 my-2 opacity-80" />
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Archive
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0 text-gray-50 hover:text-blue-200">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11 mt-64"
          >
            <CogIcon className="h-6 w-6 my-2 opacity-80" />
            <span className="w-full inline-block pb-1 md:pb-0 text-sm mt-3">
              Settings
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0 text-gray-50 hover:text-blue-200">
          <a
            href="#"
            className="block py-1 md:py-3 pl-1 align-middle no-underline flex space-x-11"
          >
            <LogoutIcon className="h-6 w-6 my-2 opacity-80" />
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
