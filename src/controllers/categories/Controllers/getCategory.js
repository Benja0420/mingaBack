import categoriesModel from "../../../models/manga/categoryModel.js";

async function getCategory(req, res) {
  try {
    const category = await categoriesModel.findById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export default getCategory;
