import express from "express";
import {
  getAllUser,
  createUser,
  getUserByObject,
  getUserById,
} from "../controller/users.js";

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/signup", createUser);
userRouter.post("/login", getUserByObject);
userRouter.get("/:id", getUserById);
export default userRouter;
