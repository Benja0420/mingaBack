import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        minLenght: 50,
    },
    color: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    }
});

const Category = model("Category", categorySchema);

export default Category;