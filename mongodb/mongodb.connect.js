import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

console.log(process.env.MONGO_URL);

export async function connect() {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Awesome connected to Mongodb 😁");
  } catch (err) {
    console.error("Error connecting to mongodb 😅");
    console.error(err);
  }
}
