import { useEffect, useState } from "react";
import "../App.css";
import { instance } from "../App";
import { Link } from "react-router-dom";
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
                  <Link to="/order">
                    <img src={el.image} alt="" />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Types;
