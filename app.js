import express from "express";
import 'dotenv/config';
import astroidRoutes from "./router/astroidRouter.js"
import connectDB from "./db/connect.js";

const port  = process.env.PORT || 8080;
const app = express();

app.use(express.json());



app.use("/api/astroids",astroidRoutes);

const start = async ()=>{
    try {
        await connectDB();
        app.listen(port,()=>{
            console.log(`Server is runnnig on Port ${port}`);
        })        
    } catch (error) {
        console.log(error);
    }
}

start();

