import { mongoose } from "mongoose";

const respuestaAbiertaSchema =mongoose.Schema({
   respuesta:{
    type:String,
   }
})
const respuestaAbierta =mongoose.model("respuestaAbierta",respuestaAbiertaSchema)
export default respuestaAbierta