const mongoose = require("mongoose");
const ProfileSchmema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
       
      },
  fname: {
    type: String,
    required: true,
   
  },
  lname: {
    type: String,
    required: true,
  
  },
  phone: {
    type: Number,
    required:true
  },
  email:{
      type:String,
      required:true
  },
  DOB:{
    type:String,
    
}, age:{
    type:Number,
    
}, DOB:{
    type:String,
    required:true
    },image:{
      type:String,
      required:true
      }
},
{
    timestamps:true
}
);
module.exports=mongoose.model("Profile",ProfileSchmema)
