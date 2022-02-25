import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
  char: {
    type: String,
    required: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  iq: {
    type: Number,
    required: true,
  },
});

export const HeroModel = mongoose.model("Hero", HeroSchema);
// "Hero" -> collection name
