import Category from '../models/category.js';

const addCategory = async (req, res) => {
  try {
    const { categoryName, categoryDescription } = req.body;
    const existingCategory = await Category.findOne({ categoryName });

    if (existingCategory) {
      return res.status(400).json({ success: false, message: "Category already exists" });
    }

    const newCategory = new Category({ categoryName, categoryDescription });
    await newCategory.save();

    return res.status(201).json({ success: true, message: "Category added successfully" });
  } catch (error) {
    console.log("Error adding category", error);
    return res.status(500).json({ success: false, message: "server error" });
  }
};

const getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ success: true, categories });
  } catch (error) {
    return res.status(500).json({ success: false, message: "server error in getting categories" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName, categoryDescription } = req.body;

    const existingCategory = await Category.findById(id);

    if (!existingCategory) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { categoryName, categoryDescription },
      { new: true }
    );

    return res.status(200).json({ success: true, message: "Category updated successfully", updatedCategory });
  } catch (error) {
    console.log('Error updating category', error);
    return res.status(500).json({ success: false, message: "server error" });
  }
};

export { addCategory, getCategory, updateCategory };
