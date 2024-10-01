import { Schema, model } from 'mongoose';

const mangaSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        minLenght: 50,
    },
    date: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        required: true,
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
});

const Manga = model('Manga', mangaSchema);
export default Manga;