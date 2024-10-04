import mangaModel from '../../models/manga/mangaModel.js';

async function getAllMangas(req, res) {
  try {
    const mangas = await mangaModel.find().populate("category_id", "color");
    res.status(200).json(mangas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getMangaById(req, res) {
  try {
    const manga = await mangaModel
      .findById(req.params.id)
      .populate("category_id", "color");
    if (manga) {
      res.status(200).json(manga);
    } else {
      res.status(404).json({ message: "Manga not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function createManga(req, res) {
    try {
        const manga = await mangaModel.findOne({ title: req.body.title });
        if (manga) {
            res.status(400).json({ message: 'Manga already exists' });
        }
        const newManga = new mangaModel(req.body);
        await newManga.save();
        res.status(201).json(newManga);

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

async function updateManga(req, res) {
    try {
        const manga = await mangaModel.findOneAndUpdate({ _id: req.params.id }, req.body
            , { new: true });
        if (!manga) {
            res.status(404).json({ message: 'Manga not found' });
        }
        else {
            res.status(200).json(manga);
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

async function deleteManga(req, res) {
    try {
        const manga = await mangaModel.findById(req.params.id);
        if (manga) {
            await manga.remove();
            res.status(200).json({ message: 'Manga removed' });
        } else {
            res.status(404).json({ message: 'Manga not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

async function getMyMangas(req, res) {
  try {
    const mangas = await mangaModel
      .find({ author_id: req.user._id })
      .populate("category_id", "color");
    res.status(200).json(mangas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default { getAllMangas, getMangaById, createManga, updateManga, deleteManga, getMyMangas };