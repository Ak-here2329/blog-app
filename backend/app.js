import express from 'express';
//2dE3egQwv2ptwbGF
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(
    "mongodb+srv://admin:2dE3egQwv2ptwbGF@cluster0.qirj518.mongodb.net/?retryWrites=true&w=majority"
    ).then(()=>app.listen(5000))
    .then(()=>console.log("Connected to Database & Listening to LocalHost 5000"))
    .catch((err)=>console.log(err));


