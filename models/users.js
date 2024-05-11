import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    }
});

const UserModel = mongoose.model("Users", UserShema);
export default UserModel;