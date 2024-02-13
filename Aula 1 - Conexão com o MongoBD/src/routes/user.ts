import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  mail: { type: String, maxLength: 50, required: true },
  password: {
    type: String,
    minlength: 6,
    maxlength: 10,
    select: false,
    required: true,
  },
});
