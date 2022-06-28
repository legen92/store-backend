const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth.router");
const bookRouter = require("./routers/book.router");
const cors = require('cors')
require("dotenv").config()

const app = express();
const port = process.env.PORT || 3333
app.use(cors({origin: ['https://store-backed.herokuapp.com/book']}))
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/book", bookRouter);
app.get("/", (req, res) => {
  return res.json({message: "Hello world !!!"})
})
app.listen(port, () => {
  console.log(`server is running at port http://localhost:${port} ...`);
});
