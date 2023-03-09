import { useEffect, useState } from "react";
import "../App.css";
import { instance } from "../App";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/esm/Button";
const Types = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await instance.post("/products/cate", {
      category: "female",
    });
    setData(
      res.data.data.map((el) => {
        return el;
      })
    );
    console.log(res);
  };
  const buyProduct = async (id) => {
    try {
      await instance.post("/order", {
        productId: id,
        user_id: JSON.parse(localStorage.getItem("id")),
      });
      toast.success("Ordered");
    } catch (error) {
      toast.error("Nevter");
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
          {data &&
            data.map((el) => {
              return (
                <div>
                  <Button
                    style={{ backgroundColor: "white ", borderColor: "white" }}
                    onClick={() => buyProduct(el._id)}
                  >
                    <img
                      style={{ height: "auto", width: "auto" }}
                      src={el.image}
                      alt=""
                    />
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
