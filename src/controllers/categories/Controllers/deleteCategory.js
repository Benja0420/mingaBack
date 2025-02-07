import categoriesModel from "../../../models/manga/categoryModel.js";

/* const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No category with id: ${id}`);
  await categoriesModel.findByIdAndRemove(id);
  res.json({ message: "Category deleted successfully." });
}; */
async function deleteCategory(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No category with id: ${id}`);
  await categoriesModel.findByIdAndRemove(id);
  res.json({ message: "Category deleted successfully." });
};

export default deleteCategory;
