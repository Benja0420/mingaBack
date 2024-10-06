import authorModel from "../../models/user/authorModel.js";

async function getAllAuthors(req, res) {
  try {
    const authors = await authorModel.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function getAuthorById(req, res) {
  try {
    const author = await authorModel.findById(req.params.id);
    if (author) {
      res.status(200).json(author);
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function createAuthor(req, res) {
  try {
    const author = new authorModel({
      user_id: req.body.user_id,
      bio: req.body.bio,
    });
    const newAuthor = await author.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function updateAuthor(req, res) {
  try {
    const author = await authorModel.findById(req.params.id);
    if (author) {
      author.user_id = req.body.user_id;
      author.bio = req.body.bio;

      const updatedAuthor = await author.save();
      res.status(200).json(updatedAuthor);
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function deleteAuthor(req, res) {
  try {
    const author = await authorModel.findById(req.params.id);
    if (author) {
      await author.remove();
      res.status(200).json({ message: "Author removed" });
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
