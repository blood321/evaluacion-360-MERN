import mongoose from "mongoose";


const preguntaSchema=mongoose.Schema({
    pregunta:{
        type: String,
        trim:true,
        required:true
    },  
    tipoPregunta:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"tipoPregunta",
        require:true
    },
    tematica:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"tematica",
        require:true
    },
    Posiblesrespuestas:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"respuesta",
        require:true
    }}
)

const preguntas =mongoose.model('pregunta',preguntaSchema)
export default preguntas