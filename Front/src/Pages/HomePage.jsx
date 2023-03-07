import Menu from "../Components/Menu";
import { createContext } from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Ads from "../Components/BigAds";
import MenuClicked from "../Components/MenuClicked";
export const MenuChange = createContext();

const HomePage = () => {
  const [menu, setMenu] = useState();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Ads />
      </div>
      <MenuChange.Provider value={{ menu, setMenu }}>
        <div className="App">{menu ? <MenuClicked /> : <Menu />}</div>
      </MenuChange.Provider>
    </div>
  );
};
export default HomePage;
