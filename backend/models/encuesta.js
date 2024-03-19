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
    descripcion:{
        type: String,
        required:true
    },
    preguntas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"preguntas",
       
    }], 
     encuestado:{
        type: String,
        enum: ["Aprendiz", "Jefes", "Compañeros"],
    },
    
    activa:{
        type:Boolean,
        default:false
    }
    

})
const encuesta =mongoose.model('encuesta',encuestaSchema)
export default encuesta