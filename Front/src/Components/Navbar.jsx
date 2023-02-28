import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsFillBagDashFill,
  BsFillInboxesFill,
  BsFillCartCheckFill,
} from "react-icons/bs";
import {
  AiFillLinkedin,
  AiOutlineHistory,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../Assets/Logo.png";
import Ads from "./BigAds"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <div className="NavCont">
      <div className="NavBody">
        <div className="NavTop">
          <div className="tavtaimoril">Welcome to Shoppy</div>
          <div className="tavtaimoril2">
            <div>86043843 </div>
            <div className="icons">
                <BsInstagram size={15} /> <BsFacebook size={15} />
              <BsYoutube size={15} /> <AiFillLinkedin size={15} />
            </div>
            <div> Leave review</div>
          </div>
        </div>
        <div className="NavMid">
          <div className="midright">
            <img src={Logo}></img>
            <InputGroup
              style={{
                width: "600px",
                position: "absolute",
                left: "240px",
                top: "0px",
              }}
              className="mb-3"
            >
              <DropdownButton
                variant="light"
                title="Everything"
                className={{}}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Popular</Dropdown.Item>
                <Dropdown.Item href="#">New</Dropdown.Item>
                <Dropdown.Item href="#">Brand</Dropdown.Item>
                <Dropdown.Item href="#">Event</Dropdown.Item>
                <Dropdown.Item href="#">Coupon</Dropdown.Item>
                <Dropdown.Item href="#">Voucher</Dropdown.Item>
                <Dropdown.Item href="#">License</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <Form.Control aria-label="Text input with dropdown button" />
            </InputGroup>
          </div>
          <div className="midleft">
            <p>
              <BsFillBagDashFill size={20} color={"white"} />
            </p>
            <p>
              <AiOutlineHistory size={20} color={"white"} />
            </p>
            <p>
              <BsFillInboxesFill size={20} color={"white"} />
            </p>
            <p>
              <BsFillCartCheckFill size={20} color={"white"} />
            </p>
            <p>
              <AiOutlineUser size={20} color={"white"} />
            </p>
          </div>
        </div>
        <div className="NavBot">
          <div className="botright">
            <p>Menu</p>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Sports</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
