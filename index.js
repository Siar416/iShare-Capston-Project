import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import secretRoutes from "./routes/secrets.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use("/secrets", secretRoutes);

const PORT = process.env.PORT || 5000;

// app.use(express.static("./client/build"));
app.use(express.static(path.join(__dirname, "./client/build")));

mongoose
  .connect(process.env.CONNECTION_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));
