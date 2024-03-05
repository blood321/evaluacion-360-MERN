import mongoose from "mongoose";


const instructorSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        trim:true
    },
  
    cedula:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },
})

const Instructor = mongoose.model('Instructor', instructorSchema)
export default Instructor