import mongoose from "mongoose";


const instructorSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true,
      
    },
    cedula:{
        type:String,
        required:true,
     
    },
  

   
    
  

})

const Instructor = mongoose.model('Instructor', instructorSchema)
export default Instructor