import mongoose from "mongoose";


const detalleEncuestaSchema=mongoose.Schema({
    Nombre:{
        type: String,
        trim:true,
        required:true
    },
    pregunta:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"preguntas",
    }],
    responde:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
    },
})
const detalleEncuesta =mongoose.model('detalleEncuesta',detalleEncuestaSchema)
export default detalleEncuesta