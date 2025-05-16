import User from './models/user.js'
import connectDB from './db/db.js'
import bcrypt from 'bcrypt'


const register= async()=>{
    try{
      await connectDB();
      const hashedPassword= await bcrypt.hash('admin',10)
    const newUser=new User({
        name:"admin",
        email:"admin@gmail.com",
        password:hashedPassword,
        address:"Dhaka",
        role:"admin"
    })
    await newUser.save()
    console.log("Admin user created succesfully")
    }catch(error){
        console.log(error)
    }
}
register()