import mongoose from "mongoose";

const feedBackSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  message:{type:String,required:true}
},
{
  timestamps:true,
});

const feedBackModel = mongoose.models.feedback || mongoose.model("feedback",feedBackSchema);
export default feedBackModel;