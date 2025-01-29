import express,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";



mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log("Connected to Database"))


const app = express();
app.use(express.json());
app.use(cors());



app.use("/api/my/user",myUserRoute);

const PORT = 6500;

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})