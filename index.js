import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import userList from "./models/ContactSchema.js";
import { MailService } from "./actions/mail.js";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), (err) =>
    res.status(500).send(err)
  );
});

// Routes
app.post("/contactus", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name && !phone && !email) {
      return res.status(400).send("Enter all Required Fields");
    }

    const result = await userList.create({
      phone,
      name,
      email,
    });
    // mail sending function
    MailService(name, phone, email);

    // on successfull DB check
    if (!result) {
      return res.status(500).send({ message: "Mail not collected" });
    }
    return res.status(200).send("Mail Collected successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});

const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
