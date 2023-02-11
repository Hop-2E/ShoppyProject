import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.use(express.json());

app.use(cors());

const uri = process.env.MONGO_ATLAS_URI || "";
const port = process.env.PORT || 3600;

const connect = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error("Couldnt Connect");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});
