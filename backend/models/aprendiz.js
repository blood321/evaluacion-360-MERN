import mongoose from "mongoose";


const AprendizSchema=mongoose.Schema({
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
    activo:{
        type:Boolean,
        default:true,
    }
},{
    timestamps:true,
})

const Aprendiz =mongoose.model('Aprendiz', AprendizSchema)
export default Aprendiz