import Eregtei from "./Pages/Eregtei.jsx";
import Emegtei from "./Pages/Emegtei.jsx";
import Huuhed from "./Pages/Huuhed.jsx";
import Sport from "./Pages/Sport.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/c/male" element={<Eregtei />} />
          <Route path="/c/female" element={<Emegtei />} />
          <Route path="/c/kids" element={<Huuhed />} />
          <Route path="/c/sport" element={<Sport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
