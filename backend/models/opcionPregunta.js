import mongoose from "mongoose";


const opcionPreguntaSchema=mongoose.Schema({
    opciones:{
        type: String,
        trim:true,
        required:true
    },
    preguntas:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"preguntas",
    }]


})

const opcionPregunta =mongoose.model('opcionPregunta',opcionPreguntaSchema)
export default opcionPregunta