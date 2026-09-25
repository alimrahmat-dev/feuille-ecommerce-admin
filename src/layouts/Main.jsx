import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Main({ children }) {
  return (
    <div className="relative min-w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-[#D8CDBF] grid grid-cols-[240px_1fr] grid-rows-[106px_1fr] border border-amber-200 ">
      <Sidebar className="row-span-2" />
      <Header />
      <div className="bg-[#D8CDBF] p-10 flex justify-center overflow-x-hidden overflow-y-auto ">{children}</div>
    </div>
  );
}
