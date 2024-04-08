const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require('cors');
const routes = require("./routes/products");
const authRoutes = require("./routes/new");
const resetRoutes = require("./routes/resetRoutes");



const dbconnction = require("./config/db");

const app = express();
app.use(cors({origin:true, credentials:true}));
dbconnction();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/text", (req,res,next)=> console.log("hello server is running"));
app.use("/api/products", routes);
app.use('/api', authRoutes);
app.use('/api', resetRoutes);





const PORT = 3000 ;

app.listen(PORT, ()=>{
    console.log(`app is running on  ${PORT}`);
})

