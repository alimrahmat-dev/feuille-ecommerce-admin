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
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/account/login" />} />
          <Route path="/account/login" element={<Login />} />
        </Route> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<IndexUser />} />
        <Route path="/product" element={<IndexProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
