import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { instance } from "../App";
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
      const res = await instance.post("/products/createProduct", {
        image: image,
        category: category,
        price: price,
        user_id: id,
      });
      console.log(res);
    } else {
      console.log("as");
    }
  };

  const logOut = async () => {
    window.localStorage.removeItem("id");
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <Link to="/">
        <Button onClick={logOut}>Log Out</Button>
      </Link>
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
