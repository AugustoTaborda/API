const express = require("express");
const productRouter = require("./router/productRouter.js");
const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter.js");
const porta = 3000;
const app = express();


app.get("/", (req, res) => {
    res.send(`<h1> Hello World!<h1>`);
});

app.use(bodyParser.json("application/json"));
app.use("/api", userRouter);

app.use("/api", productRouter);

app.listen(porta, () => {
    console.log("Servidor online!");
});

