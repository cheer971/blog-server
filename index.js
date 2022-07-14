import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

const app = express();
dotenv.config()
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/posts", postRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.ymjyd.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(5000, () => console.log(`server is running on port 5000`))
  )
  .catch((err) => console.log(process.env.NAME));
