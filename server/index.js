const express=require("express")
const app=express()
const cors=require("cors")
const  compression=require('compression')
const helmet = require("helmet")
const DB=require("./database/index")
require("dotenv").config();
DB()
app.use(cors())
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use('/api/post',require("./routes/POST"))
app.use('/api/get',require("./routes/GET"))

// Use PORT from environment variable, fallback to 5000
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0'; // Listen on all interfaces (required for Docker/ECS)

app.listen(PORT, HOST, ()=>{
    console.log(`Server is up and running on ${HOST}:${PORT}`)
})