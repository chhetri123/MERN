import countryModel from "../model/country.model.js";

export const getCountry = async (req, res) => {
  let { sort } = req.query;
  const sortBy = sort.includes("-") ? -1 : 1;
  sort = sort.substr(1);
  const role = req.user.role;
  if (role === "admin") {
    const list = await countryModel.find();
    res.json(list);
    return;
  } else {
    const list = await countryModel
      .find({
        userId: req.user._id,
      })
      .sort({
        [sort]: sortBy,
      });
    res.json(list);
    return;
  }
};
// export const getCountryCreatedByUser = async (req, res) => {
//   const list = await countryModel.find({

//   });
//   res.json(list);
// };
export const postCountry = async (req, res) => {
  const userId = req.user._id;
  const { io } = req;
  const list = await countryModel.create({
    ...req.body,
    userId,
  });
  io.emit("countryChange", {
    action: "add",
    country: list,
  });
  res.json(list);
};

export const editCountry = async (req, res) => {
  const { io } = req;
  const list = await countryModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } },
    { new: true }
  );
  io.emit("countryChange", {
    action: "edit",
    country: list,
  });
  res.json(list);
};

export const deleteCountry = async (req, res) => {
  const list = await countryModel.findOneAndRemove({
    _id: req.params.id,
    userId: req.user._id,
  });
  res.json(list);
};
