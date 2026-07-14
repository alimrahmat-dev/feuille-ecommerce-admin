import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Main({ children }) {
  return (
    <div className="min-w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-[#D8CDBF] grid grid-cols-[240px_1fr] grid-rows-[106px_1fr]  ">
      <Sidebar className="row-span-2" />
      <Header />
      <div className="bg-[#D8CDBF] p-6 flex justify-center ">{children}</div>
    </div>
  );
}
