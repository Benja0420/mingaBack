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
    minLength: 50,
  },
  color: {
    type: String,
    required: true,
  },
  character_photo: {
    type: String,
    required: true,
  },
  cover_photo: {
    type: String,
    required: true,
  },
});

const Category = model("Category", categorySchema);

export default Category;
