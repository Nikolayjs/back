import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: Array,
            default: [],
            required: true,
        },
        image: {
            type: String,
            required:true,
        },
        content_images: {
            type: Array,
            default: [],
        },
        release_date: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);
export default mongoose.model("Game", GameSchema)