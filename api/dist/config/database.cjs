"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017";
const connect = async () => {
  try {
    await _mongoose.default.connect(mongodbUrl);
    console.info("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
var _default = exports.default = {
  connect,
  connection: _mongoose.default.connection
};