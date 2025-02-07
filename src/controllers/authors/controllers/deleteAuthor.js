import authorModel from "../../../models/user/authorModel.js";

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
export default deleteAuthor;
