const app = require("./src/app");
const { connection } = require("./src/db");
require("dotenv").config();

connection.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log(`server listening at port ${PORT_NAME}`);
  });
});
