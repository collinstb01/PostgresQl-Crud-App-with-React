const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/add_todo", async (req, res) => {
  try {
    const { description } = req.body;

    const updated_data = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );
    return res.status(200).json({ message: "Successfully Sent" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/get_todos", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM todo");
    return res.status(200).json({ message: "Successfully Sent", data });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req, res) => {
  res.send("App Running");
});

app.listen(5000, () => console.log("App Running"));

// \l list of datbase
// \c  move inside Database
// \dt show table in database
