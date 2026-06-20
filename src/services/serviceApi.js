import api from "./api";

export const getDataApi = async (path)=>{
    const res = await api.get(path)
    return res.data
}

export  const getShowDataApi = async (path,id)=>{
  
    const res = await api.get(path,id)    
    return res.data

}
export  const postDataApi = async (path,data)=>{
  
    const res = await api.post(path,data)
    return res
}
export  const putDataApi = async (path,data)=>{
  
    const res = await api.put(path,data)
    return res
}

export const deleteDataApi = async (path) => {
  const res = await api.delete(path)
  return res
}
