import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "../features/auth/Login";
import ProtectedRoute from "../routes/ProtectedRoute";
import Dashboard from "../features/Dashboard/Dashboard";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/account/login" />} />
        <Route element={<ProtectedRoute />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
