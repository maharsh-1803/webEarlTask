import express from 'express'
import mongoose from 'mongoose';

import formRoutes from './routes/formRoute.js';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

app.use(
    express.urlencoded({
        extended: true,
    })
);


const connect = async ()=>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/glsnode")
        console.log("Connected to mongoDB");
    } catch (error) {
        throw error;
    }
}




app.listen(5000,()=>{
    connect();
    console.log("Sever is running on 5000");
})

app.use('/api',formRoutes);