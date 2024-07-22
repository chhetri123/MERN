import productModel from "../model/product.model.js";

export const editProduct = async (req, res) => {
  const updateProduct = await productModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...req.body } },
    { new: true }
  );
  res.json(updateProduct);
};

export const registerProduct = async (req, res) => {
  const addProduct = await productModel.create(req.body);
  res.json(addProduct);
};

export const getProduct = async (req, res) => {
  //to sort in ascending and descending order
  const getProduct = await productModel.find().sort({ name: -1 });
  // something.push()
  // somethinbg:{$push:dataname}
  // const getProduct = await productModel.aggregate([
  //   { $match: {} },
  //   {
  //     $group: {
  //       _id: "$vendorName",
  //       name: { $push: "$name" },
  //       qty: { $sum: "$quantity" },
  //     },
  //   },
  // ]);
  res.json(getProduct);
};

export const deleteProduct = async (req, res) => {
  const removeProduct = await productModel.findOneAndDelete({
    _id: req.params.id,
  });
  res.json(removeProduct);
};
