const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth.router");
const productRouter = require("./routers/products.router");
const cors = require('cors')
require("dotenv").config()

const app = express();
const port = process.env.PORT || 3333
app.use(cors({origin: ['https://store-backed.herokuapp.com']}))
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);
app.get("/", (req, res) => {
  return res.json({message: "Hello world !!!"})
})
app.listen(port, () => {
  console.log(`server is running at port http://localhost:${port} ...`);
});
