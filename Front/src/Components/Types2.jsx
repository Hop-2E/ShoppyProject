import { useEffect, useState } from "react";
import "../App.css";
import { instance } from "../App";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/esm/Button";
const Types = () => {
  const [data, setData] = useState([]);
  // const [id, setId] = useState();
  const getData = async () => {
    const res = await instance.post("/products/cate", {
      category: "male",
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
          {!isClicked === false ? (
            <div
              onClick={createShow}
              className="centerGYGY"
              style={{
                display: "flex",
                width: "40vw",
                height: "50vh",
              }}
            >
              {data &&
                data.map((el, key) => {
                  return (
                    <>
                      <div className="leftDiv">
                        <img className="productiinPic" src={el.image} alt="" />
                      </div>
                      <div className="rightDiv">
                        <span>bal@</span>
                        <span>bal@</span>
                        <span>bal@</span>
                        <span>bal@  </span>
                      </div>
                    </>
                  );
                })}
            </div>
          ) : (
            <div>
              {data &&
                data.map((el) => {
                  return (
                    <div>
                      <Button onClick={createShow}>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Types;
