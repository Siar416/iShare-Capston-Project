import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import doteven from "dotenv";
import cors from "cors";
import secretRoutes from "./routes/secrets.js";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use("/secrets", secretRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(doteven.config().parsed.CONNECTION_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));

//test
