import mongoose from "mongoose";


const instructorSchema=mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        trim:true
    },
  
    email:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },
    token:{
        type: String,
        
    },
   
    equipoEjecutor:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"equipoEjecutor",
    }]

})

const instructor =mongoose.model('instructor',instructorSchema)
export default instructor