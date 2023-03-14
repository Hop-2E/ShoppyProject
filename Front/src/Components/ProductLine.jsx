import Carousel from "react-bootstrap/Carousel";
import Product from "./Product";
import { instance } from "../App";
import { useState, useEffect } from "react";

function ProductLine() {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/products`);
    setData(res.data.data);
    console.log(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="productcont">
      <Carousel>
        <Carousel.Item>
          <div>
            <div className="prod">{data && data.slice(0, 4).map((data) => 
              <Product data={data} />)}</div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProductLine;
