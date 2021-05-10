const router = require("express").Router();
const products = require("../controllers/product-controller");
// POST : /api/product
router.post("/", products.addProduct);
// GET : /api/product
router.get("/", products.getAllProducts);
// GET : /api/product/100
router.get("/:id", products.getProductById);
// PUT : /api/product/100
router.put("/:id", products.updateProductById);
// DELETE : /api/product/100
router.delete("/:id", products.removeById);
module.exports = router;
