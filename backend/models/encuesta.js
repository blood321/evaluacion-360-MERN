import mongoose from "mongoose";


const encuestaSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    fechaCreado:{
        type: Date,
        default:Date.now(),
        required:true
    },
    tiempoResponder:{
        type: Number,
        required:true
    },
    
    preguntas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"preguntas",
       
    }], 
    encuestado: {
        type: String,
        enum: ["Aprendiz", "Jefes", "Compañeros"],
    }
    

})
const encuesta =mongoose.model('encuesta',encuestaSchema)
export default encuesta