import Eregtei from "./Pages/Eregtei.jsx";
import Emegtei from "./Pages/Emegtei.jsx";
import Huuhed from "./Pages/Huuhed.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Sport from "./Pages/Sport.jsx";
import Menu from "./Components/Menu.jsx";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
// import { Login } from "./Pages/index.js";
import Order from "./Pages/Order.jsx";
import Navbar from "./Components/Navbar";
import AdminLogged from "./Pages/AdminLogged.jsx";
import HomeLogged from "./Pages/HomeLogged";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:3600/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/c/male" element={<Eregtei />} />
          <Route path="/c/female" element={<Emegtei />} />
          <Route path="/c/kids" element={<Huuhed />} />
          <Route path="/c/sport" element={<Sport />} />
          <Route path="/order" element={<Order />} />

          <Route path="/users/:id" element={<AdminLogged />} />
          <Route path="/users/normal/:id" element={<HomeLogged />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
