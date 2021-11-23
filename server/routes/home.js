const express = require("express");
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("lolo");
    // console.log(res);
})

route.post("/home",(req,res)=>{
    console.log(req.body);
})

module.exports = route;