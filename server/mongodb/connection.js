const { MongoClient } = require("mongodb");
const configFile = require('./config');
const config = configFile.config

const uri = `mongodb+srv://${config.user}:${config.password}@${config.cluster}/${config.database}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

exports.main = main;
