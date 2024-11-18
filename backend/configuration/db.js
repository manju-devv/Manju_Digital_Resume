
import mongoose from "mongoose";

const DBConnect = async () =>{
try{
  await mongoose.connect("mongodb+srv://manju:9666702088@cluster0.9btnx.mongodb.net/Resume")
  .then(()=>{
    console.log("db connected")
  }).catch(e=>{
    console.log(e)
    process.exit(1);
  })
  }catch(e){
  console.log(e)
  }
}
export default DBConnect;
