import mangaModel from "../../../models/manga/mangaModel.js";

async function getAllMangas(req, res) {
  try {
    const mangas = await mangaModel
      .find()
      .populate("category_id", ["name", "color"]);
    res.status(200).json(mangas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default getAllMangas;
