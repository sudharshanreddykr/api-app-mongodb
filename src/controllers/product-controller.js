const ProductModel = require("../models/product");

const addProduct = async (req, res) => {
  try {
    const data = await ProductModel.create(req.body);
    return res.status(201).send(data);
  } catch (e) {
    return res.status(400).send(e);
  }
};
const getAllProducts = async (req, res) => {
  try {
    const data = await ProductModel.find({});
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send(e);
  }
};
const getProductById = async (req, res) => {
  try {
    const data = await ProductModel.findOne({ productId: req.params.id });
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send(e);
  }
};
const removeById = async (req, res) => {
  try {
    const data = await ProductModel.remove({ productId: req.params.id });
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send(e);
  }
};
const updateProductById = async (req, res) => {
  try {
    return ProductModel.updateOne({ productId: req.params.id }, req.body);
  } catch (e) {
    return Promise.reject(e);
  }
};
module.exports = {
  updateProductById,
  removeById,
  addProduct,
  getAllProducts,
  getProductById,
};
