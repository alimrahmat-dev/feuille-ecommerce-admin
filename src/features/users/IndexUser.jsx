import Main from "../../layouts/Main";
import { getData } from "../../services/service";
import { useQuery} from '@tanstack/react-query';
import { getDataApi } from "../../services/serviceApi";


export default function IndexUser() {

    const labelTable = ['Username','Email','Nomor HP','Tanggal Lahir','role ']
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => getDataApi("/users"), 
  });

console.log(data);

  return (
    <>
      <Main>
        <div className="content">
          <div className="rounded-lg  overflow-y-hidden overflow-x-hidden">
            <table className=" w-full">
              <thead className="bg-gray-100 ">
                          
                                  
                <tr className="">
                  {labelTable.map((data)=>{
                  return <td className="w-auto   p-2 text-center ">{data}</td>
                       
                })}
          

                </tr>

              </thead>
              <tbody>
                {
                    data.map((data)=>{
                       return  <tr className="border-b border-gray-100">
                  <td className="  w-auto p-1">{data}</td>
                </tr>

                    })
                   
            
            
                }
               
              </tbody>
            </table>
          </div>
        </div>
      </Main>
    </>
  );
}
