import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Categories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editCategory, setEditCategory] = useState(null);

  // Fetch categories (no change)
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/category", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
        },
      });
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Submit handler (no change)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(editCategory){
      try {
      const response = await axios.put(
        `http://localhost:5000/api/category/${editCategory}`,
        { categoryName, categoryDescription },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
          },
        }
      );

      if (response.data.success) {
        setEditCategory(null)
        setCategoryName('');
        setCategoryDescription()
        toast.success(" category edited successfully");
        fetchCategories();
      } else {
        toast.error("Error adding category. Please try again.");
      }
    } catch (error) {
      console.error("Error while adding category:", error);
      toast.error("Something went wrong. Please check your server.");
    }
    }else{
    try {
      const response = await axios.post(
        "http://localhost:5000/api/category/add",
        { categoryName, categoryDescription },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
          },
        }
      );

      if (response.data.success) {
        setCategoryName("");
        setCategoryDescription("");
        toast.success("Category added successfully");
        fetchCategories();
      } else {
        toast.error("Error adding category. Please try again.");
      }
    } catch (error) {
      console.error("Error while adding category:", error);
      toast.error("Something went wrong. Please check your server.");
    }
  }
  };
const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this?");
  if (confirmDelete) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/category/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("pos-token")}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Category deleted successfully");
        fetchCategories();
      } else {
        console.error("Error deleting category", response.data);
        toast.error("Deleting problem found");
      }
    } catch (error) {
      console.error("Error deleting category", error);
      toast.error("Deleting problem found");
    }
  }
};


  const handleEdit = (category) => {
    setEditCategory(category._id);
    setCategoryName(category.categoryName);
    setCategoryDescription(category.categoryDescription);
  };

  const handleCancel = () => {
    setEditCategory(null);
    setCategoryName("");
    setCategoryDescription("");
  };

  if (loading) return <div>Loading.....</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-start gap-8 p-8">
      {/* Form section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Category Management
        </h1>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            {editCategory ? "Edit" : "Add"} Category
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-600">
                Category Name
              </label>
              <input
                type="text"
                placeholder="Category Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-sm text-gray-600">
                Category Description
              </label>
              <input
                type="text"
                placeholder="Category Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                required
              />
            </div>
<div className='flex space-x-2'>
            <button
              type="submit"
              className="w-full bg-blue-500 mt-2 hover:bg-blue-600 text-white font-semibold p-3 rounded-md transition duration-200"
            >
              {editCategory ? "Save changes" : "Add category"}
            </button>

            {editCategory && (
              <button
                type="button"
                className="w-full mt-2 bg-red-500 text-white font-semibold p-3 rounded-md hover:bg-red-600 transition duration-200"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
</div>

          </form>
        </div>
      </div>

      {/* Categories list section */}
      <div className="lg:w-2/3 w-full">
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2">Si No.</th>
                <th className="border border-gray-200 p-2">Category Name</th>
                <th className="border border-gray-200 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category._id || index}>
                  <td className="border border-gray-200 p-2">{index + 1}</td>
                  <td className="border border-gray-200 p-2">
                    {category.categoryName}
                  </td>
                  <td className="border border-gray-200 p-2 space-x-2">
                    <button
                      className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
                      onClick={() => handleEdit(category)}
                    >
                      Edit
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    onClick={()=>handleDelete(category._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
