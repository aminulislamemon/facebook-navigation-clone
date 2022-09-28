import facebook from "../../images/facebook-logo.png";
import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faHome,
  faSearch,
  faStore,
  faUserGroup,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-full h-[70px] shadow-lg flex items-center relative">
      <div className="flex items-center">
        <img className="w-[6.5%]" src={facebook} alt="facebook logo" />
        <div className=" px-6 py-[11px] rounded-full search-field">
          <FontAwesomeIcon className="text-xl font-normal" icon={faSearch} />
          <input
            className="outline-none border-0 pl-3 search-field"
            placeholder="Search Facebook"
            type="search"
          />
        </div>
      </div>
      <div className="flex text-2xl absolute left-[400px] text-gray-600">
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-300 cursor-pointer"
          icon={faHome}
        />
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-300 cursor-pointer"
          icon={faUserGroup}
        />
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-300 cursor-pointer"
          icon={faClapperboard}
        />
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:border2 cursor-pointer"
          icon={faStore}
        />
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-300 cursor-pointer"
          icon={faUsersLine}
        />
      </div>

    </div>
  );
};

export default Header;
