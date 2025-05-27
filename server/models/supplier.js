import mongoose from "mongoose";

const supplierSchema=new mongoose.Schema({
    Supplier_Name:{
        type:String,
        required:true
    },
   Supplier_email:{
         type:String,
         required:true,
         unique:true
    },
     Supplier_Phone:{
        type:String,
        required:true
    },
     Supplier_address:{
        type:String,
        required:true
    },
})
const SupplierModel =mongoose.model("Supplier",supplierSchema);
export default SupplierModel;