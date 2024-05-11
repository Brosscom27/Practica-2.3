import express from "express";
import CarModel from "../models/cars.js";
const router = express.Router();

router.get("/cars", async (request, response) => {
    try {
        const cars = await CarModel.find({});
        response.send(cars);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/cars", async (request, response) => {
    const product = new CarModel(request.body);

    try {
        await product.save();
        response.send(cars);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/cars/:id", async (request, response) => {
    try {
        const cars = await CarModel.findOne({ _id: request.params.id });
        response.send(cars);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;