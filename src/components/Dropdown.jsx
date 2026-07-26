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
import { NavLink } from "react-router";

export default function Dropdown({ list }) {
  const cekList = list;
  console.log();
  

  return (
    <>
      <div className="flex gap-4 items-center justify-between  min-w-35  flex-col">
        <button className="flex gap-4">
          <FontAwesomeIcon icon={faBoxArchive} />
          <span>Product</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="w-full bg-white">
          <ul>
              
            {cekList?.map((item, index) => (
              <li className="text-black" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
