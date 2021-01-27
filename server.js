require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");

// Connect DB
connectDB();

const app = express();

app.use(express.json()); // parses Content-Type: application/json (can change enctype on form)

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

// Handling Promises that has no rejection handlers
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});

// TIME 49:32
