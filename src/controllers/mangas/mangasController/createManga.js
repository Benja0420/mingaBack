import mangaModel from "../../../models/manga/mangaModel.js";

async function createManga(req, res) {
  try {
    const manga = await mangaModel.findOne({ title: req.body.title });
    if (manga) {
      res.status(400).json({ message: "Manga already exists" });
    }
    const newManga = new mangaModel(req.body);
    await newManga.save();
    res.status(201).json(newManga);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
export default createManga;
