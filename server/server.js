const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// Endpoint
app.get("/data", (req, res) => {
  res.json({ name: "tuti" });
});

app.listen(PORT, () => console.log("server is running"));
