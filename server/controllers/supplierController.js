import Supplier from '../models/Supplier.js';

const addSupplier = async (req, res) => {
  try {
    const { Supplier_Name, Supplier_email,Supplier_Phone,Supplier_address } = req.body;
    const existingSupplier = await Supplier.findOne({ Supplier_Name });

    if (existingSupplier) {
      return res.status(400).json({ success: false, message: "Supplier already exists" });
    }

    const newSupplier = new Supplier({ Supplier_Name,Supplier_email,Supplier_Phone,Supplier_address });
    await newSupplier.save();

    return res.status(201).json({ success: true, message: "Supplier added successfully" });
  } catch (error) {
    console.log("Error adding category", error);
    return res.status(500).json({ success: false, message: "server error" });
  }
};
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    return res.status(200).json({ success: true, suppliers });
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error in getting suppliers" });
  }
};


export { addSupplier,getSuppliers};
