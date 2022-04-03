import express from "express";
import Secret from "../model/secret.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const router = express.Router();

// Get details of all secrets
router.get("/", (req, res) => {
  Secret.find((err, secrets) => {
    if (err) {
      res.send(err);
    } else {
      res.json(secrets);
    }
  });
});

// post a secret
router.post("/", (req, res) => {
  if (
    !req.body.title ||
    !req.body.secret ||
    !req.body.author ||
    !req.body.tag
  ) {
    res.status(400).send("Please fill out all fields");
    return;
  }

  const secret = new Secret();
  secret.title = req.body.title;
  secret.secret = req.body.secret;
  secret.author = req.body.author;
  secret.tag = req.body.tag.replace(/\s/g, "");
  secret.save((err) => {
    if (err) {
      res.status(406).send("Error saving secret");
    } else {
      res.status(201).json({ message: "Secret successfully posted!" });
    }
  });
});

// get a secret by id
router.get("/:id", (req, res) => {
  Secret.findById(req.params.id, (err, secret) => {
    if (err) {
      res.status(404).send("secret not found");
    } else {
      res.json(secret);
    }
  });
});

// like a secret
router.patch("/:id", (req, res) => {
  Secret.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } },
    { new: true },
    (err, secret) => {
      if (err) {
        res.status(404).send("secret not found");
      } else {
        res.status(201).json(secret);
      }
    }
  );
});

// delete a secret
router.delete("/:id", (req, res) => {
  Secret.findByIdAndDelete(req.params.id, (err, secret) => {
    if (err) {
      res.status(404).send("secret not found");
    } else {
      res.status(201).json(`Item ${req.params.id} deleted`);
    }
  });
});

// get a secret by tags
router.get("/tags/:tag", (req, res) => {
  console.log(req.params);
  Secret.find({ tag: req.params.tag }, (err, secret) => {
    if (err) {
      res.status(404).send("secret not found");
    } else {
      res.json(secret);
    }
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  // res.sendFile("index.html");
});

export default router;
