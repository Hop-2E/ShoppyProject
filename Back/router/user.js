import express from "express";
import {
  getAllUser,
  createUser,
  getUserByObject,
} from "../controller/users.js";

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/signup", createUser);
userRouter.post("/login", getUserByObject);

export default userRouter;
