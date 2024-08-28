import countryModel from "../model/country.model.js";

export const getCountry = async (req, res) => {
  const role = req.user.role;
  if (role === "admin") {
    const list = await countryModel.find();
    res.json(list);
    return;
  } else {
    const list = await countryModel.find({
      userId: req.user._id,
    });
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
  const list = await countryModel.create({
    ...req.body,
    userId,
  });
  res.json(list);
};

export const editCountry = async (req, res) => {
  const list = await countryModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } },
    { new: true }
  );
  res.json(list);
};

export const deleteCountry = async (req, res) => {
  const list = await countryModel.findOneAndRemove({
    _id: req.params.id,
    userId: req.user._id,
  });
  res.json(list);
};
