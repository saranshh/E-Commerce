const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path"); 
const errorMiddleware = require("./middleware/error");
 
//Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({path:"backend/config/config.env"});
// }

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// Middleware for errors
app.use(errorMiddleware);

app.use(express.static(path.resolve(__dirname, "../frontend/client/build")));

app.get("/api/v1/health", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Server is running smoothly",
    });
});
  
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/client/build/index.html"));
});

module.exports = app;    