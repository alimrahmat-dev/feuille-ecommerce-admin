import { useState } from "react";
import api from "../services/api";

export default function useGetDataTable() {
  const [data, setData] = useState();
  const getData = async (path) => {
    try {
      const response = await api.get(path);
      console.log(response);
      
      setData(response.data)
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };
  
  return{data,getData};
}
