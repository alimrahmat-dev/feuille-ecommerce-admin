import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "../features/auth/Login";
import ProtectedRoute from "../routes/ProtectedRoute";
import Dashboard from "../features/Dashboard/Dashboard";
import IndexUser from "../features/users/IndexUser";
import IndexProduct from "../features/products/IndexProduct";
export default function AppRoutes() {
  const token = localStorage.getItem("token");
  
  
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
     
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard/>} />
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="/user" element={<IndexUser />} />
        <Route path="/product" element={<IndexProduct />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
