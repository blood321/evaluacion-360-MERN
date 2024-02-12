import { mongoose } from "mongoose";

const respuestaSchema =mongoose.Schema({
    Respuesta:{
        type:String,
        trim:true,
        require:true,
    }, 
   
    encuesta:
            
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"encuesta",
    }],
    opcionUnica:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"opcionUnica",
    }],
}

)
const respuesta =mongoose.model("respuesta",tematicaSchema)
export default respuesta