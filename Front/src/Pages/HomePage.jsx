import Menu from "../Components/Menu";
import MenuClicked from "../Components/MenuClicked";
import { createContext } from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar"
export const MenuChange = createContext();

const HomePage = () => {
  // const [menu, setMenu] = useState(false);
  return (
    <div><Navbar/></div>
    // <MenuChange.Provider value={{ menu, setMenu }}>
    //   <div className="App">
    //     {menu ? <MenuClicked /> : <Menu />}
    //     <div className="www"> </div>
    //   </div>
    // </MenuChange.Provider>
  );
};
export default HomePage;
