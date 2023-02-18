import User from "../model/User.js";
import { Order } from "../model/Product.js";
import { Product } from "../model/Product.js";
import jwt from "jsonwebtoken";
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({}).populate("Product");
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getUserByObject = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const token = jwt.sign(
      {
        email: email,
        password: password,
        role: role,
      },
      "secret",
      {
        expiresIn: "100d",
      }
    );
    const user = await User.findOne({
      email: email,
    });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.send("isMatch");
    }
    if (user) {
      res.status(200).send({
        data: user,
        token: token,
      });
    } else {
      res.status(404).send({
        data: "tiim user bhq bn",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const buyProduct = async (req, res) => {
  try {
    const { user_id } = req.body;
    const user = await User.findById(user_id).populate("Order");
    await Order.create(req.body);
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
