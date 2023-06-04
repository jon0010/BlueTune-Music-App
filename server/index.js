const app = require("./src/app");
const { connection } = require("./src/db");
require("dotenv").config();

connection.sync({ alter: true }).then(() => {
  app.listen(3001, () => {
    console.log(`server listening at port ${process.env.PORT_NAME}`);
  });
});
