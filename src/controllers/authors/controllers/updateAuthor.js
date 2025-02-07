import authorModel from "../../../models/user/authorModel.js";

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
export default updateAuthor;
