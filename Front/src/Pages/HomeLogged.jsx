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
  const [image, setImage] = useState();
  const [role, setRole] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const { id } = useParams();

  const getData = async () => {
    const res = await instance.get(`/users/${id}`);
    setRole(res.data.data.role);
    window.localStorage.setItem("id", JSON.stringify(res.data.data._id));
  };

  const create = async () => {
    if (role === "admin") {
      await instance.post("/products/createProduct", {
        image: image,
        category: category,
        price: price,
        user_id: id,
      });
      toast.success("Created");
    } else {
      toast.error("Admin erh avna uu");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ToastContainer />
      <Navbar />

      <div>
        <input placeholder="Image" onChange={(e) => setImage(e.target.value)} />
        <input
          placeholder="Cate"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input placeholder="price" onChange={(e) => setPrice(e.target.value)} />
        <Button onClick={create}>Create</Button>
      </div>
    </div>
  );
};

export default HomePage;
