import authorModel from "../../../models/user/authorModel.js";

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
export default createAuthor;
