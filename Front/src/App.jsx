// import Eregtei from "./Pages/Eregtei.jsx";
// import Emegtei from "./Pages/Emegtei.jsx";
// import Huuhed from "./Pages/Huuhed.jsx";
// import HomePage from "./Pages/HomePage.jsx";
// import Sport from "./Pages/Sport.jsx";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="Body">
      <Home/>
    </div>
  );
}
