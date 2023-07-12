import express from "express";
import Secret from "../model/secret.js";

const router = express.Router();

// Get details of all secrets
router.get("/", async (req, res) => {
  try {
    const secrets = await Secret.find();
    if (secrets.length === 0) {
      res.status(404).send("No secrets found.");
    } else {
      res.status(200).json(secrets);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// post a secret
router.post("/", async (req, res) => {
  try {
    const { title, secret, author, tag } = req.body;

    if (!title || !secret || !author || !tag) {
      res.status(400).send("Please fill out all fields");
      return;
    }

    const trimmedTag = tag.replace(/\s/g, "");

    const newSecret = new Secret({
      title,
      secret,
      author,
      tag: trimmedTag,
    });

    await newSecret.save();
    res.status(201).json({ message: "Secret successfully posted!" });
  } catch (error) {
    res.status(406).send("Error saving secret");
  }
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

export default router;
