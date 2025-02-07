import categoriesModel from "../../../models/manga/categoryModel.js";

/* const updateCategory = async (req, res) => {
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
}; */
async function updateCategory(req, res) {
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
}
export default updateCategory;
