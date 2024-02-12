import mongoose from "mongoose";


const detalleEncuestaSchema=mongoose.Schema({
    Nombre:{
        type: String,
        trim:true,
        required:true
    },
    preguntas:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"preguntas",
    }],
    encuesta:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"encuesta",
    }],
})

const detalleEncuesta =mongoose.model('detalleEncuesta',detalleEncuestaSchema)
export default detalleEncuesta