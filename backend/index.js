const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("DB connected"))
  .catch((err)=>console.log(err));


app.listen(process.env.PORT || 3000, ()=>{
  console.log("Backend server is running");
})


