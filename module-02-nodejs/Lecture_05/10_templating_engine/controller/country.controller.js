const countries = [];

const getCountries = (_, res) => {
  res.json(countries);
};

const postCountries = (req, res) => {
  const country = req.body.country;
  const newRecord = { id: countries.length, name: country };
  countries.push(newRecord);
  res.json(newRecord);
};

const patchCountries = (req, res) => {
  const country = req.body.country;
  countries.splice(+req.params.id, 1, { id: req.params.id, country: country });
  res.json(countries);
};

const deleteCountries = (req, res) => {
  const deletedItem = countries.splice(+req.params.id, 1);
  res.json(deletedItem);
};

module.exports = {
  getCountries,
  postCountries,
  patchCountries,
  deleteCountries,
};
