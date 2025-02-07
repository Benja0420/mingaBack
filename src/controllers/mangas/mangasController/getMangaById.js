import mangaModel from "../../../models/manga/mangaModel.js";

async function getMangaById(req, res) {
  try {
    const manga = await mangaModel
      .findById(req.params.id)
      .populate("category_id", ["name", "color"]);
    if (manga) {
      res.status(200).json(manga);
    } else {
      res.status(404).json({ message: "Manga not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default getMangaById;
