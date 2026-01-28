import mongoose from "mongoose";


const propertySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    address: String,
    city: String,
    type: {type: String, enum: ["rent", "sale"]},
    lat: Number,
    lng: Number,
    images: [String],
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
  },
  {timestamps: true}
);

export default mongoose.model("Property", propertySchema);