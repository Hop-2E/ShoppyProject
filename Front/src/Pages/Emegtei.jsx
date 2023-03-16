import "../App.css";
import Navbar from "../Components/Navbar";
import OnePicture from "../Components/OnePicture";
import Types from "../Components/Types";
import { instance } from "../App";
import { useState, useEffect } from "react";

const Emegtei = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/products`);
    setData(res.data.data);
    console.log(res.data.data);
  };
  return (
    <>
      <Navbar />
      <OnePicture />
      <Types />
    </>
  );
};
export default Emegtei;
