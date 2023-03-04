import { useEffect, useState } from "react";
import "../App.css";
import { instance } from "../App";

const Types2 = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await instance.post("/products/cate", {
      category: "male",
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
            data.map((el, index) => {
              return (
                <div key={index}>
                  <img src={el.image} alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Types2;
