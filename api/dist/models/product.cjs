"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const schema = new _mongoose.default.Schema({
  name: String,
  description: String,
  price: Number
});
const Product = _mongoose.default.model('Product', schema);
var _default = exports.default = Product;