import mongoose from "mongoose";
import Posts from "../models/posts.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const createPost = (req, res) => {
  const newPost = new Posts(req.body);
  try {
    newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Post not exist.");
  const posts = { creator, title, message, tags, selectedFile, _id: id };
  const updatedPost = await Posts.findByIdAndUpdate(id, posts, { new: true });

  res.json(updatedPost);
};
