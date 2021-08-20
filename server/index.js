// npm libraries
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// app routers from router folder
const router = require("./router/index");

// test
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cookieParser());
// for correct contact server with browser
app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
  }),
);

// 1par - route 2par - router
app.use("/api", router);

const start = async () => {
  try {
    // connect to db
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // start app, callback if server is started
    app.listen(PORT, () => console.log(`server working in ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
