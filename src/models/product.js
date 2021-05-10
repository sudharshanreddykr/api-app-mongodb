const mongoose = require("mongoose");
const { Schema, SchemaTypes } = require("mongoose");
const ProductSchema = new Schema({
  productId: {
    type: SchemaTypes.Number,
    required: true,
  },
  productName: {
    type: SchemaTypes.String,
    required: true,
  },
  productImage: {
    type: SchemaTypes.String,
  },
  productPrice: {
    type: SchemaTypes.Number,
    default: 0,
  },
  productSalePrice: {
    type: SchemaTypes.Number,
    default: 0,
  },
  productMeta: {
    type: SchemaTypes.String,
  },
  createdAt: {
    type: SchemaTypes.Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
