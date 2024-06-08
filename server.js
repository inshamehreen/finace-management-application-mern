// importing the express packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
// const { fileURLToPath } = require('url');
const connectDb = require("./config/connectDb");
//config dont env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transaction routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//statis files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = 8080 || process.env.PORT;

//listening server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
