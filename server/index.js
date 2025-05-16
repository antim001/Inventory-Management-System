import express from 'express'
import cors from 'cors'
import connectDB from './db/db.js'
import auth from './routes/auth.js'

const app=express()
connectDB()
const PORT=process.env.PORT || 7000
app.use(cors());
app.use(express.json())
app.use('/api/auth',auth)


app.listen(PORT,()=>{
      console.log(`Server is running on PORT ${PORT}`)
})