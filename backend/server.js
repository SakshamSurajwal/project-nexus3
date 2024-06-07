const express=require('express');
const dotenv=require('dotenv');
const connectDB = require('./db.js');
const userRoutes=require('./userRoute.js');

dotenv.config({path:'./c.env'});

connectDB();
const app=express();

app.use(express.json());
app.use('/api/user',userRoutes);

const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})