import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName:  {
            type: String,
            default: 'Пользователь'
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        favoritesGames: {
            type: Array,
            default:[]
        },
        purchasedGames: {
            type: Array,
            default: [],
        },
        balance: {
            type: Number,
            default: 1000
        },
        avatarUrl: {
            type: String,
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7Mwd5bi-e2DBBlP6F1oZwYOkqKlm4z98Gg&usqp=CAU'
        },
        isAdmin: Boolean,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", UserSchema)