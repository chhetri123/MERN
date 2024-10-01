const postSchema = require("./../model/postSchema");
const commentSchema = require("./../model/commentSchema");

const createComment = async (req, res) => {
  const { postId } = req.params;
  const { text } = req.body;
  const user = req.user;

  const post = await postSchema.findById(postId);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  /// Get PostId from Params

  // Create comment ==> {userId, postId, text}==> commentId
  const newComment = await commentSchema.create({
    text: text,
    post: postId,
    authorId: user._id,
  });
  console.log(newComment);
  console.log(post);
  //
  post.comment.push(newComment._id);
  await post.save();

  res.status(200).json({ msg: "New Comment Added", comment: newComment });
  // add the commentId to the post schemna if it exists
};

module.exports = { createComment };
