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

    activo:{
        type:Boolean,
        default:true,
    }
},{
    timestamps:true,
})

const Aprendiz =mongoose.model('Aprendiz', aprendizSchema)
export default Aprendiz