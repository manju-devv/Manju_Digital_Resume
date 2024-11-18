import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import DBConnect from './configuration/db.js';
import router from './Routes/formRouter.js';



dotenv.config()


const app = express();
const port = 5000;
app.use(cors(
  {
    origin:"https://manju-digital-resume-front.vercel.app",
    credentials:true
  }
));
app.use(express.json());
app.use("/",router)
DBConnect();



app.get("/",(req,res)=>{
  res.send("welcome")
})
app.options('*', cors());
app.listen(port,()=>{
  console.log(`server on localhost:${port}`)
})
