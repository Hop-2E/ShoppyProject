import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  name: {
    required: [true, "Ner"],
    type: String,
  },
  image: {
    required: [true, "zurag"],
    type: String,
  },
});
ProductSchema.virtual("Link", {
  ref: "Link",
  localField: "_id",
  foreignField: "user_id",
});
const Product = mongoose.model("User", ProductSchema);

export default Product;
