"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _products = _interopRequireDefault(require("../controllers/products.js"));
var _product = _interopRequireDefault(require("../models/product.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const router = _express.default.Router();
const productsController = new _products.default(_product.default);
router.get('/', (req, res) => productsController.get(req, res));
var _default = exports.default = router;