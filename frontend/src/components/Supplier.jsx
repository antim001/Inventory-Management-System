import React, { useState,useEffect } from 'react';
import axios from "axios";
import { toast } from "react-hot-toast";

const Supplier = () => {
  const [addEditModel, setEditModel] = useState(null);
  const [editSupplier,setEditsupplier]=useState(null)
  const [suppliers,setSuppliers] =useState([]);
  const [loading,setLoading]=useState(false);
 

  const [formData, setFormData] = useState({
    Supplier_Name: '',
    Supplier_email: '',
    Supplier_Phone: '',
    Supplier_address: '',
  });
const handleEdit =(supplier)=>{
  setFormData({
    Supplier_Name:supplier.Supplier_Name,
   Supplier_email:supplier.Supplier_email,
    Supplier_Phone:supplier.Supplier_Phone,
     Supplier_address:supplier.Supplier_address,
  });
  setEditsupplier(supplier._id);
  setEditModel(true)
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/supplier/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Supplier added successfully");
        setEditModel(false);
        setFormData({
          Supplier_Name: '',
          Supplier_email: '',
          Supplier_Phone: '',
          Supplier_address: '',
        });
      } else {
        toast.error("Error adding supplier. Please try again.");
      }
    } catch (error) {
      console.error("Error while adding supplier:", error);
      toast.error("Something went wrong. Please check your server.");
    }
  };
 const fetchSuppliers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/supplier", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
        },
      });
      setSuppliers(response.data.suppliers);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
  fetchSuppliers()
  },[])
  const closeModel =()=>{
    setEditModel(false);
    setFormData({
     Supplier_Name: '',
    Supplier_email: '',
    Supplier_Phone: '',
    Supplier_address: '',
    })
  }
  return (
    <div className='w-full h-full flex flex-col gap-4 p-4'>
      <h1 className='text-2xl font-bold'>Supplier Management</h1>
      <div className='flex justify-between items-center'>
        <input
          type="text"
          placeholder='Search'
          className='border p-1 bg-white rounded px-4'
        />
        <button
          className='px-4 py-1.5 bg-blue-500 text-white rounded cursor-pointer'
          onClick={() => {
  setEditModel(true);        // Open modal
  setEditsupplier(null);     // Clear editing ID (because it's a new supplier)
  setFormData({              // Clear the form
    Supplier_Name: '',
    Supplier_email: '',
    Supplier_Phone: '',
    Supplier_address: '',
  });
}}

        >
          Add Supplier
        </button>
      </div>

{
  loading ? <div>Loading</div>:(
     <div className=" w-full">
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2">Si No.</th>
                <th className="border border-gray-200 p-2">Supplier Name</th>
                <th className="border border-gray-200 p-2">Supplier Email</th>
                <th className="border border-gray-200 p-2">Supplier Phone</th>
                <th className="border border-gray-200 p-2">Supplier Address</th>
                <th className="border border-gray-200 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr key={supplier._id || index}>
                  <td className="border border-gray-200 p-2">{index + 1}</td>
                  <td className="border border-gray-200 p-2">
                    {supplier.Supplier_Name}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {supplier.Supplier_email}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {supplier.Supplier_Phone}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {supplier.Supplier_address}
                  </td>
                  <td className="border border-gray-200 p-2 space-x-2">
                    <button
                      className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
                      onClick={() => handleEdit(supplier)}
                    >
                      Edit
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    onClick={()=>handleDelete(supplier._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {suppliers.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No suppliers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  )
}
      {addEditModel && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
          <div className='bg-white p-4 rounded shadow-md w-1/3 relative'>
            <h1 className='text-xl font-bold'>Add Supplier</h1>
            <button
              className='absolute top-4 right-4 font-bold text-lg'
              onClick={closeModel}
            >
              X
            </button>
            <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder='Supplier Name'
                value={formData.Supplier_Name}
                name="Supplier_Name"
                onChange={handleChange}
                required
                className='border p-1 bg-white rounded px-4'
              />
              <input
                type="email"
                placeholder='Supplier Email'
                value={formData.Supplier_email}
                name="Supplier_email"
                onChange={handleChange}
                required
                className='border p-1 bg-white rounded px-4'
              />
              <input
                type="text"
                placeholder='Supplier Phone Number'
                value={formData.Supplier_Phone}
                name="Supplier_Phone"
                onChange={handleChange}
                required
                className='border p-1 bg-white rounded px-4'
              />
              <input
                type="text"
                placeholder='Supplier Address'
                value={formData.Supplier_address}
                name="Supplier_address"
                onChange={handleChange}
                required
                className='border p-1 bg-white rounded px-4'
              />
              
              <div className='flex space-x-2'>
            <button
              type="submit"
              className="w-full bg-blue-500 mt-2 hover:bg-blue-600 text-white font-semibold p-3 rounded-md transition duration-200"
            >
              {editSupplier ? "Save changes" : "Add supplier"}
            </button>

            {editSupplier && (
              <button
                type="button"
                className="w-full mt-2 bg-red-500 text-white font-semibold p-3 rounded-md hover:bg-red-600 transition duration-200"
                onClick={closeModel}
              >
                Cancel
              </button>
            )}
</div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Supplier;
