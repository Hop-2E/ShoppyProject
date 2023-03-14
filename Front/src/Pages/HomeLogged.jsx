import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BigAds from "../Components/BigAds";
import Navbar from "../Components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App";
import Productline from "../Components/ProductLine";
const HomePage = () => {
  const { id } = useParams();

  const getData = async () => {
    const res = await instance.get(`/users/${id}`);
    window.localStorage.setItem("id", JSON.stringify(res.data.data._id));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <BigAds />
        </div>
      </div>
      <div>{/* <Coupons /> */}</div>
      <div>
        <Productline />
      </div>
    </div>
  );
};

export default HomePage;
