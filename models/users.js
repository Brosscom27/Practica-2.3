import mongoose from "mongoose";

const UsersShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Int
    }
});

const UserModel = mongoose.Model("Users", UsersShema);
export default UserModel;