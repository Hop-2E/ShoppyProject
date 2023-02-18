import { useContext } from "react";
import { MenuChange } from "../Pages/HomePage";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const { menu, setMenu } = useContext(MenuChange);

  const click = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
    console.log(menu);
  };

  const homeClick = () => {
    setMenu(false);
  };

  return <div className="hah" onClick={click}></div>;
};

export default Menu;
