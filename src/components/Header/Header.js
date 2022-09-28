import facebook from "../../images/facebook-logo.png";
import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faClapperboard,
  faHome,
  faMessage,
  faSearch,
  faSortDown,
  faStore,
  faUserGroup,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-full h-[70px] shadow-md flex items-center relative bg-white">
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
      <FontAwesomeIcon className="lg:hidden md:hidden flex m-2" icon={faBars}/>
      <div className="lg:flex hidden text-2xl absolute left-[330px] text-gray-600 items-center justify-center">
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
          icon={faHome}
        />
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
          icon={faUserGroup}
        />
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
          icon={faClapperboard}
        />
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
          icon={faStore}
        />
        <FontAwesomeIcon
          className="px-[30px] py-[25px] ml-[20px] hover:rounded-lg hover:text-blue-500 hover:bg-gray-200 cursor-pointer"
          icon={faUsersLine}
        />
      </div>
      <div className="mr-1 lg:flex items-center hidden">
        <div className="flex items-center  hover:bg-gray-200 pr-12 rounded-full">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={`https://im.indiatimes.in/amp/2019/May/mark_zuckerberg_1556776740.jpg?w=1200&h=900&cc=1`}
            alt=""
          />
          <h1 className=" font-semibold ml-1">Zukar</h1>
        </div>
        <div className="flex pl-5">
          <div className="w-[45px] h-[45px] rounded-full bg-gray-200 text-center relative mr-3">
            <FontAwesomeIcon
              className="rounded-full  bg-gray-100 cursor-pointer relative top-3 text-xl"
              icon={faBars}
            />
          </div>
          <div className="w-[45px] h-[45px] rounded-full bg-gray-200 text-center relative mr-3">
            <FontAwesomeIcon
              className="rounded-full  bg-gray-100 cursor-pointer relative top-3 text-xl"
              icon={faMessage}
            />
          </div>
          <div className="w-[45px] h-[45px] rounded-full bg-gray-200 text-center relative mr-3">
            <FontAwesomeIcon
              className="rounded-full  bg-gray-100 cursor-pointer relative top-3 text-xl"
              icon={faBell}
            />
          </div>
          <div className="w-[45px] h-[45px] rounded-full bg-gray-200 text-center relative mr-3">
            <FontAwesomeIcon
              className="rounded-full  bg-gray-100 cursor-pointer relative top-3 text-xl"
              icon={faSortDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
