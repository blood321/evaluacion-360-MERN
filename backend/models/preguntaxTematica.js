import mongoose from "mongoose";


const preguntaxTematicaSchema=mongoose.Schema({
  
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

const preguntaxTematica =mongoose.model('preguntaxTematica',Schema)
export default preguntaxTematica