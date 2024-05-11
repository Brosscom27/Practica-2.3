import express from "express";
import CarModel from "../models/cars.js";
const router = express.Router();

router.get("/car", async (request, response) => {
    try {
        const car = await CarModel.find({});
        response.send(car);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/car", async (request, response) => {
    const car = new CarModel(request.body);

    try {
        await car.save();
        response.send(car);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/car/:id", async (request, response) => {
    try {
        const car = await CarModel.findOne({ _id: request.params.id });
        response.send(car);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;