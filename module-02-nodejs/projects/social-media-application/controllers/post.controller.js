import postModel from "../model/post.model.js";

export const createPost = async (req, res) => {
  try {
    const list = await postModel.create({ ...req.body, user: req.user._id });
    res.json(list);
  } catch (err) {
    res.json({ msg: err?.message || "Error" });
  }
};

//country ( name )
