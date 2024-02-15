import { mongoose } from "mongoose";

const respuestaSchema =mongoose.Schema({
    Respuesta:{
        type:String,
        trim:true,
        
    }, 
   Multiple:     
    {
        type:String,
        enum:["Si","No","talves","no se "],
    },
  escala:{
    type:String,
        enum:["1","2","3"],
  }
}

)
const respuesta =mongoose.model("respuesta",respuestaSchema)
export default respuesta