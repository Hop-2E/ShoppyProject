import { useContext } from "react";
import { MenuChange } from "../Pages/HomePage";
import { useState } from "react";
import {
  MdOutlineSportsBaseball,
  MdCameraAlt,
  MdOutlineChildFriendly,
  MdOutlineFastfood,
  MdOutlineSmartToy,
  MdPets,
  MdOutlinePausePresentation,
} from "react-icons/md";
import { FaMale, FaCarAlt, FaFemale } from "react-icons/fa";
import { GiCutDiamond, GiToaster, GiEvilBook } from "react-icons/gi";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { SiDrupal } from "react-icons/si";
import { AiFillPicture } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { SlSocialTwitter } from "react-icons/sl";
import { BiChevronRight } from "react-icons/bi";

const imgs = [
  {
    img: "https://shoppy.mn/f4d4ed27c8f74c0202f540f8742222ff.svg",
  },
  {
    img: "https://shoppy.mn/6607761cbccc39b0a47f6f5b9410dbe7.svg",
  },
  {
    img: "https://shoppy.mn/2a8b776faeee69efaf0bcd601e4063c8.svg",
  },
  {
    img: "https://shoppy.mn/1983f1a8d346155430804f772d907cfd.svg",
  },
  {
    img: "https://shoppy.mn/ac66ce6ba7ddf0e1e600de2be0f1d0f4.svg",
  },
  {
    img: "https://shoppy.mn/c256029add9af9dd85d8596ec71b95d2.svg",
  },
  {
    img: "https://shoppy.mn/eba71b796d5fd78bfacadb1a5a6faf9a.svg",
  },
  {
    img: "https://shoppy.mn/c311e672af36e19f8924789b68cc13eb.svg",
  },
  {
    img: "https://shoppy.mn/219ca37a929cf8228bcc27e7c3a8d807.svg",
  },
  {
    img: "https://shoppy.mn/8fcd38c83943144169851ffb24d4a456.svg",
  },
  {
    img: "https://shoppy.mn/542668947ce45b92ab369c60890ef545.svg",
  },
  {
    img: "https://shoppy.mn/e8174fd44c3a1c817a9921bd003d3e8c.svg",
  },
];

const menus = [
  {
    icon: <FaFemale />,
    title: "Эмэгтэй",
  },
  {
    icon: <FaMale />,
    title: "Эрэгтэй",
  },
  {
    icon: <MdOutlineChildFriendly />,
    title: "Хүүхдийн",
  },
  {
    icon: <MdCameraAlt />,
    title: "Технологи",
  },
  {
    icon: <MdOutlineSportsBaseball />,
    title: "Спорт",
  },
  {
    icon: <GiCutDiamond />,
    title: "Үнэт эдлэл",
  },
  {
    icon: <CgSmartHomeWashMachine />,
    title: "Гэрийн & Тавилга",
  },
  {
    icon: <GiToaster />,
    title: "Цахилгаан хэрэгсэл",
  },
  {
    icon: <MdOutlineSportsBaseball />,
    title: "Гоо сайхан",
  },
  {
    icon: <SiDrupal />,
    title: "Эрүүл мэнд & Эрүүл ахуй",
  },
  {
    icon: <MdOutlineFastfood />,
    title: "Хүнс",
  },
  {
    icon: <MdOutlineSmartToy />,
    title: "Тоглоом & Хобби",
  },
  {
    icon: <AiFillPicture />,
    title: "Урлаг энтертайнмент",
  },
  {
    icon: <GiEvilBook />,
    title: "Ном & цомог, пянз",
  },
  {
    icon: <HiPencilAlt />,
    title: "Бичиг хэрэг",
  },
  {
    icon: <SlSocialTwitter />,
    title: "Цахим тасалбар",
  },
  {
    icon: <MdPets />,
    title: "Тэжээвэр амьтны хангамж",
  },
  {
    icon: <MdOutlineSportsBaseball />,
    title: "Бэлгийн эрүүл мэнд",
  },
  {
    icon: <FaCarAlt />,
    title: "Авто",
  },
  {
    icon: <MdOutlinePausePresentation />,
    title: "Купон",
  },
];
const Menu = () => {
  const { menu, setMenu } = useContext(MenuChange);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (num) => {
    setActiveIndex(num);
  };

  const click = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
    console.log(menu);
  };

  return (
    <div className="bigContainer">
      <div className="shoppy-drawer-body">
        <div className="shoppy-tabs-nav">
          {menus.map((el, index) => {
            return (
              <div
                className="shoppy-tabs-tab"
                onClick={() => handleClick(index)}
                style={{
                  backgroundColor: activeIndex !== index ? "white" : "#ff6166",
                }}
              >
                <div className="btn-container">
                  <div className="img">{el.icon}</div>
                  <div className="btn-taxonomy">{el.title}</div>
                </div>
                <div className="right">
                  <BiChevronRight />
                </div>
              </div>
            );
          })}
          <div className="shoppy-tabs-navTwo">
            {imgs.map((el) => {
              return (
                <div className="btn-container-two">
                  <div className="container">
                    <img src={el.img} alt="" />
                    <div className="right">
                      <BiChevronRight />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="btn-con">
        <div className="btn-close" onClick={click}></div>
      </div>
    </div>
  );
};

export default Menu;
