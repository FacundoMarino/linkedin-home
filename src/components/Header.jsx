import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUsers,
  faBriefcase,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="bg-white shadow p-4 flex justify-around items-center border-t-2 border-[#25568E] ">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png?20210220164014"
        alt="Logo"
        className="h-10 w-10"
      />
      <div className="relative w-1/2">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search for movies..."
          onKeyDown={handleSearch}
          className="border rounded-md pl-10 py-2 w-full bg-[#EEF3F7]"
        />
      </div>
      <div className="hidden lg:block">
        <nav className="flex gap-6 items-center">
          <a
            href="/"
            className="flex flex-col items-center text-gray-600 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faHome} size="lg" />
            <span className="text-sm mt-1">Home</span>
          </a>
          <a
            href="/"
            className="flex flex-col items-center text-gray-600 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faUsers} size="lg" />
            <span className="text-sm mt-1">Mi Red</span>
          </a>
          <a
            href="/"
            className="flex flex-col items-center text-gray-600 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
            <span className="text-sm mt-1">Empleos</span>
          </a>
          <a
            href="/"
            className="flex flex-col items-center text-gray-600 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span className="text-sm mt-1">Mensaje</span>
          </a>
          <a
            href="/"
            className="flex flex-col items-center text-gray-600 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faBell} size="lg" />
            <span className="text-sm mt-1">Notificaciones</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
