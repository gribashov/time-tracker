const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");

const PORT = process.env.PORT || 8081;
const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const uri =
  "mongodb+srv://admin:jakushenko@cluster0.ghiio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const start = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true });
    app.listen(PORT, () => console.log(`server working in ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
