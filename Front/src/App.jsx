import Eregtei from "./Pages/Eregtei.jsx";
import Emegtei from "./Pages/Emegtei.jsx";
import Huuhed from "./Pages/Huuhed.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Sport from "./Pages/Sport.jsx";
import Menu from "./Components/Menu.jsx";
import MenuClicked from "./Components/MenuClicked";
import Navbar from "./Components/Navbar"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/c/male" element={<Eregtei />} />
          <Route path="/c/female" element={<Emegtei />} />
          <Route path="/c/kids" element={<Huuhed />} />
          <Route path="/c/sport" element={<Sport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
