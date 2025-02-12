"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _products = _interopRequireDefault(require("./products.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const router = _express.default.Router();
router.use('/products', _products.default);
router.get('/', (req, res) => res.end('Hello World!'));
var _default = exports.default = router;