import Menu from "../comp/Menu";
import MenuClicked from "../comp/MenuClicked";
import { createContext } from "react";
import { useState } from "react";
export const MenuChange = createContext();

const HomePage = () => {
  const [menu, setMenu] = useState(false);
  return (
    <MenuChange.Provider value={{ menu, setMenu }}>
      <div className="App">
        {menu ? <MenuClicked /> : <Menu />}
        <div className="www"> </div>
      </div>
    </MenuChange.Provider>
  );
};
export default HomePage;
