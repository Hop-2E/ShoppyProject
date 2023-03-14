import { useEffect, useState } from "react";
import "../App.css";
import { instance } from "../App";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/esm/Button";
const Types = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const getData = async () => {
    const res = await instance.post("/products/cate", {
      category: "male",
    });
    setData(
      res.data.data.map((el) => {
        setId(el._id);
        return el;
      })
    );
    console.log(res);
  };
  const buyProduct = async () => {
    try {
      await instance.post("/order", {
        productId: id,
        user_id: JSON.parse(localStorage.getItem("id")),
      });
      toast.success("Ordered");
      setData((prev) => prev.filter((el) => el._id !== id));
      setIsClicked(false);
    } catch (error) {
      toast.error("Nevter");
    }
  };
  const [isClicked, setIsClicked] = useState(false);
  const createShow = async () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="gygy">
      <ToastContainer />

      <div className="typesCont">
        <p>Aнгиллаар дэлгүүр хэсэх</p>
        <div className="types">
          {/* Component bolgoj hii 2 shirheg */}
          {!isClicked === false ? (
            data &&
            data.map((el, key) => {
              return (
                <div
                  onClick={createShow}
                  className="centerGYGY"
                  style={{
                    display: "flex",
                    width: "40vw",
                    height: "50vh",
                    flexDirection: "row",
                  }}
                >
                  <div className="leftDiv" key={key}>
                    <img className="productiinPic" src={el.image} alt="" />
                  </div>
                  <div className="rightDiv">
                    <p>Product name: "{el.name}"</p>
                    <p>Product price: "{el.price}"</p>
                    <p>Product stock: "{el.count}"</p>
                    <p>Product categotry: "{el.category}"</p>
                    <Button onClick={buyProduct}>Order</Button>
                    <Button onClick={createShow}>X</Button>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {data &&
                data.map((el) => {
                  return (
                    <div className="types">
                      <Button onClick={createShow}>
                        <img
                          style={{
                            height: "auto",
                            width: "auto",
                            display: "flex",
                            flexDirection: "row",
                          }}
                          className="types"
                          src={el.image}
                          alt=""
                        />
                      </Button>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Types;
