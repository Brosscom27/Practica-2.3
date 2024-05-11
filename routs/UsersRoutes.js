import express from "express";
import UserModel from "../models/users.js";
const router = express.Router();

router.get("/users", async (request, response) => {
    try {
        const users = await UserModel.find({});
        response.send(users);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/users", async (request, response) => {
    const users = new UserModel(request.body);

    try {
        await product.save();
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/users/:id", async (request, response) => {
    try {
        const users = await UserModel.findOne({ _id: request.params.id });
        response.send(users);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;