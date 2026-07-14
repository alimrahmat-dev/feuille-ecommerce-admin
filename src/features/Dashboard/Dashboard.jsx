import Card from "../../components/Card";
import Main from "../../layouts/Main";
import { Line } from "react-chartjs-2";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Chart from "../../components/Chart";

export default function Dashboard() {
  return (
    <Main>
      <div className="min-w-350 h-auto bg-white rounded-[64px] p-10  grid grid-rows-[1fr] grid-cols-1 gap-30 ">
        <div className="flex justify-center items-center gap-10 w-full ">
          {/* card dashboard */}
          <Card icon={faUser} nilai={800}></Card>
          <Card icon={faUser} nilai={800}></Card>
          <Card icon={faUser} nilai={800}></Card>
        </div>
        <div className="w-1/2">
          <Chart ></Chart>
          
          {/* <Line  id={1} data={data}/> */}
        </div>
      </div>
    </Main>
  );
}
