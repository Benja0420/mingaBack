import authorModel from "../../../models/user/authorModel.js";

async function getAllAuthors(req, res) {
  try {
    const authors = await authorModel.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default getAllAuthors;