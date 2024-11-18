
import mongoose from "mongoose";

const DBConnect = async () =>{
try{
  await mongoose.connect(process.env.MONGO_URI)
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