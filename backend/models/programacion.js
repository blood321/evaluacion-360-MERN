import mongoose from "mongoose";


const programacionSchema=mongoose.Schema({
    descripcion:{
        type: String,
        trim:true,
        required:true
    },
    ficha:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ficha",
    }],
    instructores:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"instructores",
    }],



})

const  programacion =mongoose.model('programacion',programacionSchema)
export default  programacion