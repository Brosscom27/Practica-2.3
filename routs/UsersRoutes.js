import express from "express";
import UserModel from "../models/users.js";
const router = express.Router();

router.get("/user", async (request, response) => {
    try {
        const user = await UserModel.find({});
        response.send(user);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/user", async (request, response) => {
    const user = new UserModel(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/user/:id", async (request, response) => {
    try {
        const user = await UserModel.findOne({ _id: request.params.id });
        response.send(user);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;