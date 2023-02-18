import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  image: {
    required: [true, "Image"],
    type: String,
  },
  price: {
    required: [false, "Price"],
    type: String,
  },
  desc: {
    type: String,
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
  category: {
    required: [false, "Price"],
    type: String,
  },
});
const OrderSchema = new mongoose.Schema({
  productId: {
    type: String,
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});
export const Product = mongoose.model("Product", ProductSchema);
export const Order = mongoose.model("Order", OrderSchema);
