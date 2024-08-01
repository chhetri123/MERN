import roomModel from "../model/room.model.js";

//post
export const addRoom = async (req, res) => {
  try {
    const list = await roomModel.create({ ...req.body });
    res.json(list);
  } catch (err) {
    res.json({ err: err?.message || "something went while creating room" });
  }
};
//list
export const listRoom = async (req, res) => {
  try {
    // key: -1 ( descending order )
    // key: 1 ( ascending order)
    const list = await roomModel.find().sort({ _id: -1 });
    res.json(list);
  } catch (err) {
    res.json({ err: err?.message || "something went while listing in" });
  }
};

//delete
export const deleteRoom = async (req, res) => {
  try {
    const list = await roomModel.findOneAndDelete({ _id: req.params.id });
    res.json(list);
  } catch (err) {
    res.json({ err: err?.message || "something went while deleting room" });
  }
};
