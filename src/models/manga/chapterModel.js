import { Schema, model } from "mongoose";

const chapterSchema = new Schema({
    manga_id: {
        type: Schema.Types.ObjectId,
        ref: "Manga",
        required: true,
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    title: {
        type: String,
        unique: true,
        required: true,
    },
    number: {
        type: Number,
        unique: true,
        required: true,
    },
    pages: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Chapter = model("Chapter", chapterSchema);
export default Chapter;