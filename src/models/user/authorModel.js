import { Schema, model } from "mongoose";

const authorSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bio: {
    type: String,
    required: true,
    minLength: 50,
    maxLength: 500,
  },
});

const Author = model("Author", authorSchema);
export default Author;
