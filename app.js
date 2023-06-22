const express = require("express");
const app = express();
const productRoute = require("./routes/prodRoute");
const categoryRoute=require("./routes/categoryRoute");
const accountRoute=require("./routes/accontRoute");
const userRoute=require("./routes/userRoute");
const cors=require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/product", productRoute);
app.use("/category", categoryRoute);
app.use("/account", accountRoute);
app.use("/user",userRoute);

app.get("/", (req, res) => 
{
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