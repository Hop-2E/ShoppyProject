import { instance } from "../App";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Create = () => {
  const [image, setImage] = useState();
  const [role, setRole] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [count, setCount] = useState();
  const [name, setName] = useState([]);
  const id = JSON.parse(localStorage.getItem("id"));
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
        count: count,
        name: name,
      });

      toast.success("Created");
    } else {
      toast.error("Admin erh avna uu");
    }
  };
  const little = async () => {
    window.location.replace(`/users/${id}`);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div
        style={{
          display: "flex ",
          flexDirection: "column",
          width: "200px",
          height: "200px",
        }}
      >
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Image" onChange={(e) => setImage(e.target.value)} />
        <input
          placeholder="Cate"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input placeholder="price" onChange={(e) => setPrice(e.target.value)} />
        <input placeholder="count" onChange={(e) => setCount(e.target.value)} />
        <Button onClick={create}>Create</Button>
      </div>
    </div>
  );
};
export default Create;
