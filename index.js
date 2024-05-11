import express from "express";
import dotenv from "dotenv";
import DB from "./config/db.js";
import UsersRoutes from "./routs/UsersRoutes.js"
import Carsroutes from "./routs/Carsroutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

DB.connectDB(process.env.DB_URI);

app.use("/users", UsersRoutes);
app.use("/cars", Carsroutes);

app.listen(port, ()=>{
    console.log(`Server conect at http://localhost:${port}`);
});