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
import useDropdown from "../hooks/useDropdown";

export default function Dropdown({ datas }) {
  const data = datas;
  const listArray = data.list;

  const {isActive, toggleActive} = useDropdown()

  
  

  return (
    <>
      {/* button */}
      <li className="flex gap-4 p-2 items-center justify-between w-full  border border-amber-200 min-w-35  flex-col">
        <button className="flex justify-between items-center w-full border border-red-400" onClick={toggleActive}>
          <FontAwesomeIcon icon={data.icon} />
          <NavLink>{data.labels}</NavLink>
          <FontAwesomeIcon icon={faChevronRight} className={`${isActive ?'rotate-90 transition' :'rotate-0 transition'}`} />
        </button>
      </li>
      {/* dropdown */}
      {isActive ? <div className=" gap-4 items-center justify-between  border border-amber-400 w-full p-2 bg-white rounded-sm text-[#3B4D3E] flex-col flex ">
        <ul className="border w-full border-pink-400 p-2 flex flex-col gap-2">
          {listArray.map((item, index) => (
            <li className="border border-purple-500 p-1 w-full flex gap-4 items-center" key={index}>
              <FontAwesomeIcon icon={item.icon} />
              {console.log("cek"+ item.path)
              }
              <NavLink to={`/${item.path}`}>{item.labels}</NavLink>
            </li>
          ))}
        </ul>
      </div> : '' }
      
    </>
  );
}
