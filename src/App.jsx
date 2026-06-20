import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Login from "./features/auth/Login";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/account/login" element= {<Login/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
