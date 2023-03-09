import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import BigAds from "../Components/BigAds";
import { instance } from "../App";
import Coupons from "../Components/Coupons";
import Productline from "../Components/ProductLine";
import { Toast } from "bootstrap";
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
      <ToastContainer />
      <Navbar />
      <div>
        <div>
          <BigAds />
        </div>
        <input placeholder="Image" onChange={(e) => setImage(e.target.value)} />
        <input
          placeholder="Cate"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input placeholder="price" onChange={(e) => setPrice(e.target.value)} />
        <Button onClick={create}>Create</Button>
      </div>
      <div>
        <Coupons />
      </div>
      <div>
        <Productline />
      </div>
    </div>
  );
};

export default HomePage;
