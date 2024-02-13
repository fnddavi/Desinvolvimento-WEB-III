import mongoose from "mongoose";
const { Schema } = mongoose;

const SpentSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, maxlength: 30, required: true },
  value: { type: Number, required: true },
});
