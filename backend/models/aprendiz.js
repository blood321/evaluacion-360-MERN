import mongoose from "mongoose";


const aprendizSchema=mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        trim:true
    }, 
    
   
},{
    timestamps:true,
})

const aprendiz =mongoose.model('aprendiz',aprendizSchema)
export default aprendiz