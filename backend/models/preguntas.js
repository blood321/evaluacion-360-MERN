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
    encuestado: {
        type: String,
        enum: ["Aprendiz", "Jefes", "Compañeros"],
    },
  
}
)

const preguntas =mongoose.model('pregunta',preguntaSchema)
export default preguntas