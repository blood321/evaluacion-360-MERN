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
        ref:"detalleEncuesta",
    }],
  
}

)
const respuesta =mongoose.model("respuesta",respuestaSchema)
export default respuesta