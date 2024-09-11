### Social Media Application Challenge

#### Objective:

Create a **social media application** that allows users to **create posts**, **like posts**, and **comment on posts**. You will define appropriate schemas, set up API endpoints, and use MongoDB **aggregation** to gather insights (e.g., total likes, total comments).

---

### Instructions:

#### 1. **Define Schemas**

You will create **four schemas**: `User`, `Post`, `Like`, and `Comment`.

- **User Schema**: Represents users of the application. Each user has a username, email, and bio.
- **Post Schema**: Represents a post made by a user. Each post should store a reference to the user who created it, an array of likes, an array of comments, and the content of the post.
- **Like Schema**: Represents a like on a post. A like stores a reference to both the user who liked the post and the post itself.

- **Comment Schema**: Represents a comment on a post. A comment stores the user who made the comment, the post it refers to, and the text of the comment.

#### Example Schema Definitions:

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  username: String,
  email: String,
  password:String
  bio: String,
});

// Post Schema
const postSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
});

// Like Schema
const likeSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  createdAt: { type: Date, default: Date.now },
});

// Comment Schema
const commentSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  text: String,
  createdAt: { type: Date, default: Date.now },
});
```

---

#### 2. **Create API Endpoints**

You will create the following **API endpoints** to handle **User**, **Post**, **Like**, and **Comment** functionalities.

#### a) **User Endpoints**

- **POST `/users`**: Create a new user.
- **GET `/users`**: Get a list of all users.

#### b) **Post Endpoints**

- **POST `/posts`**: Create a new post for a user.
- **GET `/posts/:id`**: Get a specific post, along with its user, likes, and comments.
- **GET `/users/:id/posts`**: Get all posts created by a specific user.

#### c) **Like Endpoints**

- **POST `/posts/:postId/like`**: Like a post by a specific user.
- **GET `/posts/:postId/likes`**: Get all likes on a specific post.

#### d) **Comment Endpoints**

- **POST `/posts/:postId/comments`**: Add a comment to a post by a specific user.
- **GET `/posts/:postId/comments`**: Get all comments on a specific post.

---

#### 3. **Aggregation Tasks**

You will implement **aggregation queries** to extract useful insights from the data.

##### a) **Total Likes Per Post**

Write an aggregation query that calculates the **total number of likes** for a given post.

##### b) **Total Comments Per Post**

Write an aggregation query that calculates the **total number of comments** for each post.

##### c) **Most Active Users**

Write an aggregation query that calculates the **most active users**, based on the total number of posts they have created.

#### Example Aggregation Query for Total Likes:

```js
Post.aggregate([
  { $match: { _id: mongoose.Types.ObjectId("POST_ID_HERE") } },
  {
    $lookup: {
      from: "likes",
      localField: "_id",
      foreignField: "post",
      as: "likes",
    },
  },
  { $project: { totalLikes: { $size: "$likes" } } },
]);
```

---

### And Finally Implement the Authentication ..Only the logged user can add post,like,comment

### Submission:

1. **Schemas**: Submit your defined Mongoose schemas for `User`, `Post`, `Like`, and `Comment`.
2. **API Routes**: Submit the code for all API endpoints, ensuring functionality for creating, reading, liking, and commenting.
3. **Aggregation Queries**: Submit the code for each aggregation query:
   - Total Likes for a Post
   - Total Comments for each Post
   - Most Active Users
