import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faBoxArchive,
  faBoxesPacking,
  faCreditCard,
  faTruckFast,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router";
import Dropdown from "../components/Dropdown";
import { sidebarDropdownArray } from "../utils/menuSidebar";

export default function Sidebar({ className }) {
  return (
    <div
      className={`bg-[#3B4D3E] ${className} flex flex-col items-center gap-15 text-[#FFFFFF] p-4 text-[16px] border border-pink-400`}
    >
      {/* logo */}
      <div className="font-intel-mono border border-amber-500 w-full text-center">
        <span>FEUILLE</span>
      </div>

      {/* menu sidebar */}
      <div className=" flex flex-col items-center gap-5  p-3  border border-blue-500 w-full">
        {/* dashboard */}
        <ul className="flex flex-col items-center justify-center border border-red-400 w-full p-3 ">
          <li className="flex gap-4 items-center   min-w-full border p-2 border-yellow-300">
            <FontAwesomeIcon icon={faHouse} />
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
        <hr className="border border-white w-40" />
        {/* menu utama */}
        <ul className="flex flex-col items-center justify-center gap-2 w-full border border-purple-600 p-3  ">
          <Dropdown datas={sidebarDropdownArray.product}></Dropdown>
          <Dropdown datas={sidebarDropdownArray.order}></Dropdown>

          {/* <li className="flex gap-4 items-center justify-between  min-w-35 ">
            <FontAwesomeIcon icon={faBoxesPacking} />
            <NavLink to="/dashboard">Order</NavLink>
            <FontAwesomeIcon icon={faChevronRight} />
          </li> */}

          <li className="flex gap-4 items-center justify-between  min-w-35">
            <FontAwesomeIcon icon={faTruckFast} />
            <NavLink to="/dashboard">Delivery</NavLink>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
          <li className="flex gap-4 items-center justify-between  min-w-35">
            <FontAwesomeIcon icon={faCreditCard} />
            <NavLink to="/dashboard">Payment</NavLink>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        </ul>

        <hr className="border border-white w-40" />

        <ul>
          <li className="flex gap-4 items-center   min-w-33">
            <FontAwesomeIcon icon={faUser} />
            <NavLink to="/user">User</NavLink>
          </li>
        </ul>
      </div>
      {/* footer */}
      <footer className="py-4 text-center text-sm font-inter text-gray-500">
        <p>&copy; 2026 FEUILLE. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}
