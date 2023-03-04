import { useEffect, useState } from "react";
import "../App.css";
import { instance } from "../App";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
const Types = () => {
  const [data, setData] = useState([]);
  // const [id, setId] = useState();
  const getData = async () => {
    const res = await instance.post("/products/cate", {
      category: "female",
    });
    setData(
      res.data.data.map((el) => {
        // setId(el._id);
        return el;
      })
    );
    console.log(res);
  };
  const buyProduct = async (id) => {
    console.log(id);
    const res = await instance.post("/order", {
      productId: id,
      user_id: JSON.parse(localStorage.getItem("id")),
    });
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="gygy">
      <div className="typesCont">
        <p>Aнгиллаар дэлгүүр хэсэх</p>
        <div className="types">
          {data &&
            data.map((el) => {
              return (
                <div>
                  <Button
                    style={{ backgroundColor: "white ", borderColor: "white" }}
                    onClick={() => buyProduct(el._id)}
                  >
                    <img src={el.image} alt="" />
                  </Button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Types;
