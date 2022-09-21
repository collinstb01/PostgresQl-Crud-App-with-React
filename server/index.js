const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("App Running"));

// \l list of datbase
// \c  move inside Database
// \dt show table in database
