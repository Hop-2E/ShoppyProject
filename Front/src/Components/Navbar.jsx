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
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { instance } from "../App";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const getData = async () => {
    const res = await instance.get(`/users/${id}`);
    setName(res.data.data.name);
  };
  const logOut = async () => {
    window.localStorage.removeItem("id");
  };
  useEffect(() => {
    getData();
    setId(JSON.parse(localStorage.getItem("id")));
  });
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
            <Link to={`/users/${id}`}>
              <img src={Logo} alt=""></img>
            </Link>
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
            <Link to="/">
              <Button onClick={logOut}>Log Out</Button>
            </Link>
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
            <Link style={{ textDecoration: "none", marginRight: "20px" }}>
              <p className="username">
                <AiOutlineUser size={20} color={"white"} />
                {name}
              </p>
            </Link>
          </div>
        </div>
        <div className="NavBot">
          <div className="rightBotHeader">
            <div className="angilal">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
                alt=""
              />
              <span>АНГИЛАЛ</span>
            </div>
            <div className="cate">
              <Link to="/c/female" style={{ textDecoration: "none" }}>
                <span className="linksWith">Woman</span>
              </Link>
              <Link to="/c/male" style={{ textDecoration: "none" }}>
                <span className="linksWith">Man</span>
              </Link>
              <Link to="/c/kids" style={{ textDecoration: "none" }}>
                <span className="linksWith">Kids</span>
              </Link>
              <Link to="/c/sport" style={{ textDecoration: "none" }}>
                <span className="linksWith">Sports</span>
              </Link>
            </div>
          </div>
          <div className="News">
            <span className="linksWith">New</span>
            <span className="linksWith">Brands</span>
            <span className="linksWith">Sale</span>
            <span className="linksWith">Gift Card</span>
          </div>
          {/* <div className="botright">
            <Link to="/c/male">male</Link>
            </div> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
