import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faBoxArchive,
  faBoxesPacking,
  faCreditCard,
  faTruckFast,
  faUser,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router";
import Dropdown from "../components/Dropdown";

export default function Sidebar({ className }) {
  return (
    <div
      className={`bg-[#3B4D3E] ${className} flex flex-col items-center gap-15 text-[#FFFFFF] p-4 text-[16px] `}
    >
      {/* logo */}
      <div className="font-intel-mono">FEUILLE</div>
      {/* menu sidebar */}

      <div className=" flex flex-col items-center gap-5  p-2 w-1/2 bg-blue-600">
        {/* dashboard */}
        <ul className="flex flex-col items-center justify-center ">
          <li className="flex gap-4 items-center   min-w-33">
            <FontAwesomeIcon icon={faHouse} />
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
        <hr className="border border-white w-40" />
        <ul className="flex flex-col items-center justify-center gap-5 w-full bg-red-600  ">
          <li className="flex gap-4 items-center justify-between  min-w-35">
            <FontAwesomeIcon icon={faBoxArchive} />
            <NavLink to="/dashboard">Product</NavLink>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
          <li>
            <Dropdown>sdfsasdfsadfsadfdasfdsasdfdasf</Dropdown>
          </li>
          <li className="flex gap-4 items-center justify-between  min-w-35 ">
            <FontAwesomeIcon icon={faBoxesPacking} />
            <NavLink to="/dashboard">Order</NavLink>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
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
            <NavLink to="/dashboard">User</NavLink>
          </li>
        </ul>
      </div>
      {/* footer */}
      <footer className="py-4 text-center text-sm font-inter text-gray-500">
        <p>&copy; 2026  FEUILLE. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}
