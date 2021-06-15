const Header = () => {
  return (
    <div className="header__container flex flex-row">
      <div class="greeting__container flex flex-col ml-24 m-10">
        <h1 class="greeting__title text-gray font-bold">
          Good Morning, Emilia S.
        </h1>
        <p class="greeting__description text-gray-50 mt-1">
          Welcome back, nice to see you again!
        </p>
      </div>
      <div className="shadow flex w-80 h-12 mt-10">
        <input
          className="rounded p-2 focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
          <i className="material-icons"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
