import countryModel from "../model/country.model.js";

export const getCountry = async (req, res) => {
  const list = await countryModel.find();
  res.json(list);
};

export const postCountry = async (req, res) => {
  const list = await countryModel.create(req.body);
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
  const list = await countryModel.findOneAndRemove({ _id: req.params.id });
  res.json(list);
};
