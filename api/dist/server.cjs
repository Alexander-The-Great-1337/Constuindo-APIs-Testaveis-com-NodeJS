"use strict";

var _app = _interopRequireDefault(require("./app.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PORT = process.env.PORT || 3000;
(async () => {
  try {
    const app = await (0, _app.default)();
    const server = app.listen(PORT, () => {
      console.info(`App running on port ${PORT}`);
    });
    const existSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
    existSignals.forEach(sig => {
      process.on(sig, () => {
        server.close(async err => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
          await app.database.coonection.close();
          console.info("Database connection closed!");
          process.exit(0);
        });
      });
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();