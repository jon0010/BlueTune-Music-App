const app = require("./src/app");
const { connection } = require("./src/db.js");
require("dotenv").config();

connection.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log(`server listening at port ${PORT_NAME}`);
  });
});
