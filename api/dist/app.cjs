"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _index = _interopRequireDefault(require("./routes/index.js"));
var _database = _interopRequireDefault(require("./config/database.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const configureExpress = () => {
  const app = (0, _express.default)();
  app.use(_bodyParser.default.json());
  app.use('/', _index.default);
  app.database = _database.default;
  return app;
};
var _default = async () => {
  const app = configureExpress();
  await app.database.connect();
  return app;
};
exports.default = _default;