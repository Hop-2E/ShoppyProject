import Menu from "../Components/Menu";
import MenuClicked from "../Components/MenuClicked";
import { createContext } from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Ads from "../Components/BigAds";
export const MenuChange = createContext();

const HomePage = () => {
  // const [menu, setMenu] = useState(false);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Ads/>
      </div>
    </div>
    // <MenuChange.Provider value={{ menu, setMenu }}>
    //   <div className="App">
    //     {menu ? <MenuClicked /> : <Menu />}
    //     <div className="www"> </div>
    //   </div>
    // </MenuChange.Provider>
  );
};
export default HomePage;
