import User from "../model/User.js";
import { Product } from "../model/Product.js";
export const adminCheck = async (req, res, next) => {
  try {
    const { user_id } = req.body;
    const user = await User.findById(user_id);
    if (user.role === "admin") {
      return next();
    } else {
      res.status(401).send({
        data: "Admin erh avna uu",
      });
    }
  } catch (error) {
    res.status(401).send({
      success: false,
      data: error.messsage,
    });
  }
};

export const count = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const res = await Product.findById(productId);
    const p = await Product.findOneAndUpdate(
      {
        _id: productId,
      },
      {
        count: res.count - 1,
      }
    );
    if (res.count === 0) {
      res.status(401).send({
        success: false,
      });
    }
    console.log(p, "kk");
    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      data: error.messsage,
    });
  }
};
