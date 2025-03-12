import express,{NextFunction, Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
import {v2 as cloudinary} from "cloudinary";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import RestaurantRoute from "./routes/RestaurantRoute";
import orderRoute from "./routes/OrderRoutes"



mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected to Database"))

cloudinary.config( {
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_SECRET_KEY,
});


const app = express();

app.use(cors());

app.use("/api/order/checkout/webhook",express.raw({ type: "*/*"}));

app.use(express.json());

app.get("/health", async(req: Request, res: Response,next: NextFunction)=>{
    res.send( {message : "health OK"});
});

app.use("/api/my/user",myUserRoute);
app.use("/api/my/restaurant",myRestaurantRoute);
app.use("/api/restaurant",RestaurantRoute);
app.use("/api/order",orderRoute);

const PORT = 6500;

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})