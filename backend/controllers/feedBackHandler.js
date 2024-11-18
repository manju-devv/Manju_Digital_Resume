import express from "express";
import feedBackModel from "../models/feedbackModel.js";


const feedback = async (req,res) => {
  const {name,email,message} = req.body;
  try{
    const exists = await feedBackModel.findOne({email})
    if(exists){
      return res.json({success:false,message:"you have already commented once."})
    }
    if(!name){
      return res.status(400).json({success:false,message:"name is required"});
    } 
    if(!email){
      return res.status(400).json({success:false,message:"email is required"});
    }  
    if(!message){
      return res.status(400).json({success:false,message:"feedback is required"});
    }
    if(email){
      
    }
    const newfeedback = new feedBackModel({
      name:name,
      email:email,
      message:message
    });
    const data = await newfeedback.save();
    res.status(200).json({success:true,message:{data}})
  }catch(e){
    res.status(400).json({success:false,message:{e}})
  }
}

export default feedback;