const express=require("express");
const app=express();
const dotENV=require("dotenv");

dotENV.config({path:"./config.env"});
require("./DB/dataBase");
app.use(express.json());
app.use(require("./routes/rootRoutes"));


module.exports=app;

require("./server");
