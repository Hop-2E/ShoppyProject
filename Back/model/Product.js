import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    required: [true, "Name"],
    type: String,
  },
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
    enum: ["male", "female", "kids", "sport"],
    required: [false, "Price"],
    type: String,
  },
  count: {
    type: Number,
    required: true,
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
