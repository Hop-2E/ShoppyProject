import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { instance } from "../App";
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

      <div></div>
    </div>
  );
};

export default HomePage;
