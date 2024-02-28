import mongoose from "mongoose";


const preguntaSchema=mongoose.Schema({
    pregunta:{
        type: String,
        trim:true,
        required:true
    },
    tematica:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"tematica",
        require:true
    },
    tipo:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"tipoPregunta",
        require:true
    },
    encuestado:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"encuestado",
        require:true
    },
    respuesta:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"respuesta",
        require:true
    },
}
)

const preguntas =mongoose.model('pregunta',preguntaSchema)
export default preguntas