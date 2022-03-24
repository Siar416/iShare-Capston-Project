import mongoose from "mongoose";

const secretSchema = new mongoose.Schema({
  title: String,
  secret: String,
  author: String,
  datePosted: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  tags: [String],
});

const Secret = mongoose.model("Secret", secretSchema);

export default Secret;
