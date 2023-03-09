import Carousel from "react-bootstrap/Carousel";
import Product from "./Product";
import { instance } from "../App";
import { useState } from "react";

function ProductLine() {
  return (
    <div className="productcont">
      <Carousel>
        <Carousel.Item>
          <div className="flex">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProductLine;
