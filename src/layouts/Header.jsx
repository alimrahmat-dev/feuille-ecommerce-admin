import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,

} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="flex bg-[#D8CDBF] text-black justify-center gap-8 items-center p-5 w-full">
      <div className="w-55 h-16.5 bg-[#FFFFFF] text-center flex justify-center items-center rounded-xl">
        <h1>Dashboard</h1>
      </div>
      <div className="w-225 h-16.5 bg-[#FFFFFF] text-center flex justify-between items-center rounded-xl p-5 overflow-hidden">
        <h1>Selamat Pagi, Admin</h1>
        <div className="flex justify-around items-center w-100 p-2">
            <div><FontAwesomeIcon icon={faBell}/></div>
          {/* profile */}
          <div className="flex gap-5">
            <div className="w-10 h-10 rounded-full bg-gray-500">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col">
              <h1>Name</h1>
              <h2>other</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
