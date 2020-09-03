const expressApp = require('./express/app');
const app = expressApp.app;
const expressConfig = require('./express/config');
const expressPort = expressConfig.config.expressPort;
const mongodbConnection = require('./mongodb/connection');

//MongoDB connection ------------------------------------------------------------------

mongodbConnection.main().catch(console.error);

//Express connection ------------------------------------------------------------------

app.listen(expressPort, () =>
  console.log(`Express server is running on localhost:${expressPort}`),
);

//API calls --------------------------------------------------------------------------

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});
