import { Product } from "../model/Product.js";
import User from "../model/User.js";
import { Order } from "../model/Product.js";
export const getAllProduct = async (req, res) => {
  try {
    const Skip = req.query.skip;
    const Limit = req.query.limit;
    const product = await Product.find({}).limit(Limit).skip(Skip);
    res.status(200).send({
      data: product,
      message: "Nice",
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send({
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).send({
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const orderTest1 = async (req, res) => {
  try {
    const Skip = req.query.skip;
    const Limit = req.query.limit;
    const product = await Order.find({}).limit(Limit).skip(Skip);
    res.status(200).send({
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getUsersProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("Order");
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const approveProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const order = await Order.findById(id);

    res.status(200).send({
      data: order,
      message: "Approved",
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getProductByCate = async (req, res) => {
  try {
    const { category } = req.body;
    const products = await Product.find({
      category: category,
    });

    res.status(200).send({
      data: products,
    });
  } catch (error) {
    res.status(400).send({
      data: error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.status(200).send({
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
