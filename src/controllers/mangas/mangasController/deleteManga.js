import mangaModel from "../../../models/manga/mangaModel.js";

async function deleteManga(req, res) {
  try {
    const manga = await mangaModel.findById(req.params.id);
    if (manga) {
      await manga.remove();
      res.status(200).json({ message: "Manga removed" });
    } else {
      res.status(404).json({ message: "Manga not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default deleteManga;
