import Category from '../models/category.js';

const addCategory =async(req,res)=>{
    try{
  const {categoryName,categoryDescription}=req.body;
  const existingCategory =await Category.findOne({categoryName})
   if(existingCategory){
     return res.status(400).json({success:false,message:"Category already exists"})
   }
   //create a new category
   const newCategory =new Category({
    categoryName,categoryDescription
   })
   await newCategory.save()
   return res.status(201).json({success:true,message:"category added successfully"})
}catch(error){
  console.log("Error adding category",error)
  return res.status(500).json({success:false,message:"server error"})
    }
}
export default addCategory;