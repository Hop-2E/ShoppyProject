import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { instance } from "../App";
import { Toast } from "bootstrap";
const AdminLogged = () => {
  const [image, setImage] = useState();
  const [role, setRole] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [count, setCount] = useState();
  const [order, setOrder] = useState([]);
  const [post, setPost] = useState([]);
  const [orderId, setOrderId] = useState();
  const [productId, setProductId] = useState();

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
        count: count,
      });

      toast.success("Created");
    } else {
      toast.error("Admin erh avna uu");
    }
  };

  const [isClicked, setIsClicked] = useState(false);
  const Orders = async () => {
    if (role === "admin") {
      if (isClicked === false) {
        const res = await instance.get(`/products/users/${id}`);
        const res2 = await instance.get(`/products/${order}`);
        console.log(res2);
        setOrder(
          res.data.data.Order.map((el) => {
            setOrderId(el._id);
            setProductId(el.productId);
            return el.productId;
          })
        );
        setPost(
          res2.data.data.map((el) => {
            return el.image;
          })
        );
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    } else {
      toast.error("Admin");
    }
  };

  const Approve = async () => {
    const res = await instance.post("approve", {
      user_id: JSON.parse(localStorage.getItem("id")),
      id: orderId,
      productId: productId,
    });
    const res2 = await instance.get(`/products/${productId}`);
    console.log(res2);
    if (res2.data.data.count === 0) {
      setPost((prev) => prev.filter((el) => el._id !== productId));
      await instance.delete(`/product/${productId}`);
    }
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ToastContainer />
      <Navbar />

      <div>
        <Button
          style={{
            display: "flex",
            alignItems: "right",
            justifyContent: "right",
          }}
          onClick={Orders}
        >
          Orders
        </Button>
        <input placeholder="Image" onChange={(e) => setImage(e.target.value)} />
        <input
          placeholder="Cate"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input placeholder="price" onChange={(e) => setPrice(e.target.value)} />
        <input placeholder="count" onChange={(e) => setCount(e.target.value)} />
        <Button onClick={create}>Create</Button>
      </div>
      {!isClicked === false ? (
        <div
          style={{
            display: "flex ",
            flexDirection: "column",
            width: "200px",
            height: "200px",
          }}
        >
          {post &&
            post.map((el, key) => {
              return (
                <div key={key}>
                  <img src={el} alt="" />
                  <Button onClick={Approve}>Approve</Button>
                </div>
              );
            })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AdminLogged;
