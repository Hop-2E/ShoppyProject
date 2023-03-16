import shoppy1 from "../Assets/shoppy1.webp";
import shoppy3 from "../Assets/shoppy3.webp";
import shoppy2 from "../Assets/shoppy2.webp";
import shoppy4 from "../Assets/shoppy4.webp";

function Coupons() {
  return (
    <div className="coupcont">
      <div>
        <img className="couponpic" src={shoppy1} alt="" />
      </div>
      <div>
        <img className="couponpic" src={shoppy2} alt="" />
      </div>
      <div>
        <img className="couponpic" src={shoppy3} alt="" />
      </div>
      <div>
        <img className="couponpic" src={shoppy4} alt="" />
      </div>
      <div>
        <img className="couponpic" src={shoppy1} alt="" />
      </div>
      <div>
        <img className="couponpic" src={shoppy2} alt="" />
      </div>
      <div>
        <img className="couponpic" src={shoppy3} alt="" />
      </div>
    </div>
  );
}

export default Coupons;
