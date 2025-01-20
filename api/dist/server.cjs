"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.get('/', (req, res) => res.end('Hello World!'));
app.listen(3000, () => {
  console.log('Exemplo app listening on port 3000!');
});