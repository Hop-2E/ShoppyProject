import Button from "react-bootstrap/Button";
import { MenuChange } from "../Pages/HomePage";
import { useContext } from "react";

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
  return (
    <>
      <div>
        <Button variant="primary" className="menu" onClick={click}>
          "АНГИЛАЛ"
        </Button>{" "}
      </div>
    </>
  );
};
export default Menu;
