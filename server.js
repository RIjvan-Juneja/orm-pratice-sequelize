const express = require("express");
const useRouter = require('./routes/router.js');
require('dotenv').config()

const app = express();

// const sequelize = require('./databases/database.js');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/",useRouter);  

// sequelize.sync().then( (result) =>{
//     console.log("Model created");
// }).catch((err) => console.log(err));


app.listen("3000", (err)=>{
    if(err){
        console.log("connection error");
    }else{
        console.log("server is listing at 3000");
    }
})


