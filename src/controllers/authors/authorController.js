import authorModel from '../../models/user/authorModel.js';

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
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

    

export default { getAllAuthors, getAuthorById };