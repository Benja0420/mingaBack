import categoriesModel from "../../../models/manga/categoryModel.js";

async function createCategory(req, res) {
  const category = req.body;
  const newCategory = new categoriesModel(category);
  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export default createCategory;
