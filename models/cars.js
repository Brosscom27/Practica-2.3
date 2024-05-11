import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    num_serie: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
    },
    brand: { type: String },
    description: { type: String },
    version: { type: String }
});

const CarModel = mongoose.model("Cars", CarSchema);
export default CarModel;