import messageModel from "../model/messge.model.js";
import mongoose from "mongoose";
// import userModel from "../model/user.model.js";

export const listMessagesByUser = async (req, res) => {
  try {
    // find, findOne, update, updateOne, deleteOne({ id: "something" });
    // aggregate([{ $match: {} }, { $group: {} }]);

    const list = await messageModel.aggregate([
      {
        $match: {},
      },
      {
        $group: {
          _id: "$room",
          totalMessages: { $sum: 1 },
          messages: {
            $push: {
              message: "$message",
              media: "$media",
              messageType: "$messageType",
            },
          },
        },
      },
      //   { $match: { totalMessages: { $gte: 3 } } },
    ]);

    res.json(list);
  } catch (err) {
    res.json({ msg: `${err.message || "somethign went wrong"}` });
  }
};
