import Menu from "../Components/Menu";
import { createContext } from "react";
import Navbar from "../Components/Navbar";
export const MenuChange = createContext();

const HomePage = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default HomePage;
