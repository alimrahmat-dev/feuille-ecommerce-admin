import Card from "../../components/Card";
import Main from "../../layouts/Main";
import { Line } from "react-chartjs-2";
import { faUser, faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import Chart from "../../components/Chart";

export default function Dashboard() {
  
  return (
    <Main>
      <div className="min-w-full h-auto bg-white rounded-[64px] p-10  grid  grid-cols-[600px_1fr] gap-30 border border-amber-300">
          {/* card dashboard */}
        <div className="flex gap-10 w-full p-4  flex-wrap border border-red-400 content-start">
         <Card icon={faBoxesPacking} nilai={800}></Card>
          <Card icon={faUser} nilai={800}></Card>
         
        </div>
        {/* CHART */}
        <div className="w-full border border-yellow-300">
          <Chart ></Chart>
          
          {/* <Line  id={1} data={data}/> */}
        </div>
      </div>
    </Main>
  );
}
