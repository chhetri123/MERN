const postSchema = require("../model/postSchema");

const allPost = async (req, res) => {
  const posts = await postSchema.find({}).populate("authorId");

  res.json({ posts });
};

const createPost = async (req, res) => {
  const user = req.user;
  console.log(user);
  try {
    const { title, body } = req.body;

    const newPost = await new postSchema({
      title: title,
      body: body,
      authorId: user._id,
    });

    const savedPost = await newPost.save();

    res.status(200).json({
      msg: "Post Created",
      post: newPost,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  await postSchema.deleteOne({ _id: id });

  res.json({
    msg: "Deleted Successfully",
  });
};

const updatePost = async (req, res) => {
  const id = req.params.id;

  const update = await postSchema.updateOne(
    { _id: id },
    {
      $set: {
        title: req.body.title,
        body: req.body.body,
      },
    }
  );

  res.json({
    msg: "Updated successfully",
  });
};

const getAllCommentsInPost = async (req, res) => {
  const postId = req.params.id;

  // const posts = await postSchema.findById(postId).populate("comment", "text");
  const posts = await postSchema.findById(postId).populate({
    path: "comment",
    select: "text",
    populate: {
      path: "authorId",
      select: "username email",
    },
  });
  res.json(posts);
};

module.exports = {
  createPost,
  deletePost,
  updatePost,
  allPost,
  getAllCommentsInPost,
};
