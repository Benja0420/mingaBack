import mangaModel from "../../../models/manga/mangaModel.js";

async function getMyMangas(req, res) {
  try {
    const mangas = await mangaModel
      .find({ author_id: req.user._id })
      .populate("category_id", ["name", "color"]);
    res.status(200).json(mangas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default getMyMangas;
