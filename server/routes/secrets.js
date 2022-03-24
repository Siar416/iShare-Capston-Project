import express from "express";
import Secret from "../model/secret.js";

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
  // validate input
  if (
    !req.body.title ||
    !req.body.secret ||
    !req.body.author ||
    !req.body.tags
  ) {
    res.status(400).send("Please fill out all fields");
  }

  const secret = new Secret();
  secret.title = req.body.title;
  secret.secret = req.body.secret;
  secret.author = req.body.author;
  secret.tags = req.body.tags;
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

//

export default router;
