import mongoose from "mongoose";


const instructorSchema=mongoose.Schema({
    nombre:{
        type: String,
        required:true,
      
    },
    cedula:{
        type:String,
        required:true,
     
    },
  

   
    
  

})

const instructor =mongoose.model('instructor',instructorSchema)
export default instructor