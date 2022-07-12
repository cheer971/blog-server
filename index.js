import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);
app.get(bodyParser.json({ limit: "30mb", extended: true }));
app.get(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.get(cors());

mongoose
  .connect(
    `mongodb+srv://loihd971:Telegram98@cluster0.ymjyd.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(5000, () => console.log(`server is running on port 5000`))
  )
  .catch((err) => console.log(err));
