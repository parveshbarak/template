const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use(express.json()); // instead of body parser

const homeRoute = require("./routes/home"); 
app.use("/",homeRoute);

app.listen(5000,()=>{
    console.log("Server started!");
})