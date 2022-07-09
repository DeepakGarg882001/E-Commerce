const mongoose = require("mongoose");
const url= process.env.DB_URL;




    mongoose.connect(url)
    .then(()=>{
        console.log("DataBase Connected Successfully ");
    }
    ).catch((error)=>{
        console.log(error);
    })



