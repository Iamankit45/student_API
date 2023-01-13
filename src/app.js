const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");

const router = new express.Router();

const studentrouter = require("./routers/student_router");





app.use(express.json());
app.use(studentrouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});
