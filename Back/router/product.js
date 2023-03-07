import express from "express";
import { adminCheck, count } from "../middleware/middleware.js";
import { buyProduct } from "../controller/users.js";
import {
  getAllProduct,
  createProduct,
  getUsersProduct,
  approveProduct,
  getProductByCate,
  getOrderById,
  deleteProduct,
} from "../controller/products.js";

const postRouter = express.Router();

postRouter.get("/products", getAllProduct);
postRouter.get("/products/:id", getOrderById);
postRouter.post("/products/createProduct", adminCheck, createProduct);
postRouter.post("/order", buyProduct);
postRouter.post("/approve", adminCheck, count, approveProduct);
postRouter.get("/products/users/:id", getUsersProduct);
postRouter.post("/products/cate", getProductByCate);
postRouter.delete("/products/:id", count, deleteProduct);

export default postRouter;
