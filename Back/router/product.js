import express from "express";
import { adminCheck } from "../middleware/middleware.js";
import { buyProduct } from "../controller/users.js";
import {
  getAllProduct,
  createProduct,
  getUsersProduct,
  approveProduct,
  getProductByCate,
} from "../controller/products.js";

const postRouter = express.Router();

postRouter.get("/products", getAllProduct);
postRouter.post("/products/createProduct", adminCheck, createProduct);
postRouter.post("/order", buyProduct);
postRouter.post("/approve", adminCheck, approveProduct);
postRouter.get("/products/:id", getUsersProduct);
postRouter.post("/products/cate", getProductByCate);

export default postRouter;
