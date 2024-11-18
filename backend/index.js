import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import DBConnect from './configuration/db.js';
import router from './Routes/formRouter.js';



dotenv.config()


const app = express();
const port = process.env.PORT || 5001;
app.use(cors(
  {
    origin:"http://localhost:3000",
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