import mongoose from "mongoose";



const encuestaSchema=mongoose.Schema({
    fecha:{
        type: Date,
        trim:true,
        required:true
    },
    descripcion:{
        type: String,
        trim:true,
        required:true
    },
    tiempoResponder:{
        type:Date,
        trim:true,
        required:true
    },
    detalleEncuesta:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"detalleEncuesta",
    }],
})

const encuesta =mongoose.model('encuesta',encuestaSchema)
export default encuesta