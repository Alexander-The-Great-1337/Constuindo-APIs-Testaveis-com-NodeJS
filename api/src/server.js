import setupApp from './app.js';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    const app = await setupApp();
    const server = app.listen(PORT, () => {
      console.info(`App running on port ${PORT}`);
    });

    const existSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
    existSignals.map(sig => {
      process.on(sig, () => {
        server.close(err => {
          if (err) {
            console.error(err);
            process.exist(1);
          }
          app.database.connection.close(function () {
            console.info("Database connection closed!");
            process.exit(0);
          });
        })
      })
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();