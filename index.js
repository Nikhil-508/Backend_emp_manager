const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()

app.use(cors({
    origin:['http://localhost:5173'],
    methods: ['GET',"POST","DELETE","PUT"],
    credentials: true
}))




app.use(cookieParser())
app.use(express.json())


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});
