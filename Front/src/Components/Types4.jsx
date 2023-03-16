import { useEffect, useState } from "react";
import "../App.css";
import { instance } from "../App";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/esm/Button";
const Types = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const getData = async () => {
    const res = await instance.post("/products/cate", {
      category: "sport",
    });
    setData(
      res.data.data.map((el) => {
        return el;
      })
    );
  };
  const buyProduct = async (id) => {
    try {
      await instance.post("/order", {
        productId: id,
        user_id: JSON.parse(localStorage.getItem("id")),
      });
      toast.success("Ordered");

      setIsClicked(false);
    } catch (error) {
      toast.error("Nevter");
    }
  };
  const [isClicked, setIsClicked] = useState(false);
  const createShow = async (id) => {
    const res = await instance.get(`/products`);
    if (res.data.data.map((el) => el._id === id)) {
      const res2 = await instance.get(`/products/${id}`);
      setData2(res2.data.data);
    }
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  const createShow2 = () => {
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
            <div
              className="centerGYGY"
              style={{
                display: "flex",
                width: "40vw",
                height: "50vh",
                flexDirection: "row",
              }}
            >
              <div className="leftDiv">
                <img className="productiinPic" src={data2.image} alt="" />
              </div>
              <div className="rightDiv">
                <p>Product name: "{data2.name}"</p>
                <p>Product price: "{data2.price}"</p>
                <p>Product stock: "{data2.count}"</p>
                <p>Product categotry: "{data2.category}"</p>
                <Button onClick={buyProduct}>Order</Button>
                <Button onClick={createShow2}>X</Button>
              </div>
            </div>
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
                      <Button onClick={() => createShow(el._id)}>
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
