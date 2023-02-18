import {BsInstagram, BsFacebook, BsYoutube, BsFillBagDashFill, BsFillInboxesFill, BsFillCartCheckFill} from "react-icons/bs";
import {AiFillLinkedin, AiOutlineHistory, AiOutlineUser} from "react-icons/ai";
import Logo from "../Assets/Logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
    return(
        <div className="NavCont">
            <div className="NavBody">
                <div className="NavTop">
                    <div className="tavtaimoril">Welcome to Shoppy</div>
                    <div className="tavtaimoril">86043843‎ ‎ ‎ ‎‎ |‎ ‎ ‎‎‎ <BsInstagram/> ‎‎<BsFacebook/> ‎‎ <BsYoutube/> ‎‎ <AiFillLinkedin/> ‎ ‎ ‎ ‎‎| ‎ ‎ ‎‎‎ Help ‎ ‎ ‎‎‎ |‎ ‎ ‎‎‎ Leave review</div>
                </div>
                <div className="NavMid">
                    <div className="midright">
                    <img src={Logo}></img>
                    <InputGroup style={{
                        width:"600px",
                        position:"absolute",
                        left:"240px",
                        top:"0px"
                    }} className="mb-3">
        <DropdownButton
          variant="outline-dark"
          title="Everything"
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
                        <p><BsFillBagDashFill size={30} color={"blue"}/></p>
                        <p><AiOutlineHistory size={30} color={"blue"}/></p>
                        <p><BsFillInboxesFill size={30} color={"blue"}/></p>
                        <p><BsFillCartCheckFill size={30} color={"blue"}/></p>
                        <p><AiOutlineUser size={30} color={"blue"}/></p>
                    </div>
                </div>
                <div className="NavBot"></div>
            </div>
        </div>
        )
};
export default Navbar;