import React from "react";
import axios from 'axios'
import {useState} from "react"
const Categories = () => {
    const [categoryName,setCategoryName]=useState("")
    const [categoryDescription,setCategoryDescription] =useState("")

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response =await axios.post("http://localhost:5000/api/category/add",{categoryName,categoryDescription},
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("pos-token")}`
                }
            }
        );
        if(response.data.success){
             alert("Category added successfully")
             setCategoryName("");
             setCategoryDescription("")
        }else{
            console.error("Error adding category",data);
            alert("Error adding category.Please try again")
        }
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center  px-2">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Category Management</h1>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Category</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-600">Category Name</label>
              <input
                type="text"
                placeholder="Category Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e)=>setCategoryName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-sm text-gray-600">Category Description</label>
              <input
                type="text"
                placeholder="Category Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 onChange={(e)=>setCategoryDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Categories;
