"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
const myMiddleware = (req, res, next) => {
  console.log('will run before any route');
  next();
};
app.get('/', (req, res) => res.end('Hello World!'));
app.use(myMiddleware);
app.listen(3000, () => {
  console.log('Exemplo app listening on port 3000!');
});