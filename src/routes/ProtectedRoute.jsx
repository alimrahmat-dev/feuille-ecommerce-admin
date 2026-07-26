import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("token") !== null;
  
  if(isAuthenticated){
    return <Navigate to={"/dashboard"}/>

  }
  return <Outlet/>
}
