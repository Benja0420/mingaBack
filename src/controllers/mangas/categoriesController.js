import categoriesModel from "../../models/manga/categoryModel.js";

const getCategories = async (req, res) => {
  try {
    const categories = await categoriesModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await categoriesModel.findById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  const category = req.body;
  const newCategory = new categoriesModel(category);
  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No category with id: ${id}`);
  const updatedCategory = await categoriesModel.findByIdAndUpdate(
    id,
    { ...category, id },
    { new: true }
  );
  res.json(updatedCategory);
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No category with id: ${id}`);
  await categoriesModel.findByIdAndRemove(id);
  res.json({ message: "Category deleted successfully." });
};

export default {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
