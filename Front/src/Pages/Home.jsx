import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
export default function Home() {
  return (
    <div className="Body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
