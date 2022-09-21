const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/add_todo", async (req, res) => {
  try {
    const { description } = req.body;

    let updated_data = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    updated_data = updated_data.rows[0];
    return res.status(200).json({ message: "Successfully Sent", updated_data });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/get_todos", async (req, res) => {
  try {
    let data = await pool.query("SELECT * FROM todo ");
    data = data.rows;

    return res.status(200).json({ message: "Successfully Sent", data });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/get_todo/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let data = await pool.query("SELECT * FROM todo WHERE todo_id = $1 ", [id]);
    data = data.rows;
    return res.status(200).json({ message: "Successfully Sent", data });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/delete_todo/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let data = await pool.query("DELETE FROM todo WHERE todo_id = $1 ", [id]);
    data = data.rows;
    return res.status(200).json({ message: "Successfully Deleted", data });
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
