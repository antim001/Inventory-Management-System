import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
dotenv.config();
const app=express()
connectDB()
const PORT=process.env.PORT || 7000
app.use(cors());



app.use(express.json())


app.listen(PORT,()=>{
      console.log(`Server is running on PORT ${PORT}`)
})