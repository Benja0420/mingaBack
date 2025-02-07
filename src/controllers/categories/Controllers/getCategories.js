import categoriesModel from "../../../models/manga/categoryModel.js";

const getCategories = async (req, res) => {
  try {
    const categories = await categoriesModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export default getCategories;