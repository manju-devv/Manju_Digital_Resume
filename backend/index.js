import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import DBConnect from './configuration/db.js';
import router from './Routes/formRouter.js';
import path from "path";


dotenv.config()


const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use("/",router)
DBConnect()



if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client/build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}


app.get("/",(req,res)=>{
  res.send("welcome")
})

app.listen(port,()=>{
  console.log(`server on localhost:${port}`)
})