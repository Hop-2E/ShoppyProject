import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "Name"],
      type: String,
      maxlength: [20, "Arail urt"],
    },
    email: {
      required: [true, "Email"],
      unique: [true, "Burtgeltei email baina"],
      type: String,
    },
    password: {
      required: [true, "Password"],
      type: String,
    },
    role: {
      enum: ["normal", "admin"],
      default: "normal",
      required: true,
      type: String,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
UserSchema.virtual("Product", {
  ref: "Product",
  localField: "_id",
  foreignField: "user_id",
});
UserSchema.virtual("Order", {
  ref: "Order",
  localField: "_id",
  foreignField: "user_id",
});
UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.jwtGenerate = async function () {
  return jwt.sign({ id: this._id, username: this.username }, "secret", {
    expiresIn: "1d",
  });
};
const User = mongoose.model("User", UserSchema);

export default User;
