
import mongoose from "mongoose"

const DBConnect = async () =>{
  await mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{
    console.log("db connected")
  }).catch(e=>{
    console.log(e)
    process.exit(1);
  })
}
export default DBConnect;