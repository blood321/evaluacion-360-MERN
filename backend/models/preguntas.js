import mongoose from "mongoose";


const preguntaSchema=mongoose.Schema({
    pregunta:{
        type: String,
        trim:true,
        required:true
    },  
    tipoPregunta:{
        type:String,
        requered:true,
        enum:['Abierta','Cerrada','Multiple'],
    },
      tematica:{
        type:String,
        requered:true,
        enum:['Pedagogica','Tecnica','Profecional'],
    },
})

const preguntas =mongoose.model('pregunta',preguntaSchema)
export default preguntas