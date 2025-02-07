import mangaModel from "../../../models/manga/mangaModel.js";

async function updateManga(req, res) {
  try {
    const manga = await mangaModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!manga) {
      res.status(404).json({ message: "Manga not found" });
    } else {
      res.status(200).json(manga);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default updateManga;
