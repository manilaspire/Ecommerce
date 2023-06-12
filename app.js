const express = require("express");
const app = express();
const productRoute = require("./routes/prodRoute");

// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/product", productRoute);

app.get("/", (req, res) => {
    res.send('API IS NOW WORKING');
  });

  app.use((req, res, next) => {
    const error = new Error();
    error.message = "Not Found";
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ error: error });
  });

  module.exports = app;