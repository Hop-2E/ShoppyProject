import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { instance } from "../App";
import BigAds from "../Components/BigAds";
import { Toast } from "bootstrap";
const AdminLogged = () => {
  const [image, setImage] = useState();
  const [role, setRole] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [count, setCount] = useState();
  const [order, setOrder] = useState([]);
  const [post, setPost] = useState([]);
  const [name, setName] = useState([]);
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
        name: name,
      });

      toast.success("Created");
    } else {
      toast.error("Admin erh avna uu");
    }
  };
  const createShow = async () => {
    if (isClicked2 === false) {
      setIsClicked2(true);
    } else {
      setIsClicked2(false);
    }
  };
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
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
            return el;
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
    toast.success("Approved");
    if (res2.data.data.count === 0) {
      setPost((prev) => prev.filter((el) => el._id !== productId));
      await instance.delete(`/product/${productId}`);
    } else {
      console.log("oonh");
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
        <BigAds />
      </div>
      <div>
        <Button onClick={Orders}>Orders</Button>
        <Button onClick={createShow}>Create</Button>
      </div>
      {!isClicked === false ? (
        <div>
          {post &&
            post.map((el, key) => {
              return (
                <div key={key}>
                  <img
                    style={{ height: "auto", width: "auto" }}
                    src={el.image}
                    alt=""
                  />
                  <p> {el.name}</p>
                  <Button onClick={Approve}>Approve</Button>
                </div>
              );
            })}
        </div>
      ) : (
        <div></div>
      )}
      {!isClicked2 === false ? (
        <div
          style={{
            display: "flex ",
            flexDirection: "column",
            width: "200px",
            height: "200px",
          }}
        >
          <input placeholder="name" onChange={(e) => setName(e.target.value)} />
          <input
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            placeholder="Cate"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            placeholder="count"
            onChange={(e) => setCount(e.target.value)}
          />

          <Button onClick={create}>Create</Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AdminLogged;
