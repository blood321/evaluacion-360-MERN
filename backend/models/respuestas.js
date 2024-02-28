import { mongoose } from "mongoose";

const respuestaSchema =mongoose.Schema({
   Multiple:     
    {
        type:String,
        enum:["Si","No","talves","no se "],
    },
    pregunta:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"pregunta"
    }

})
const respuesta =mongoose.model("respuesta",respuestaSchema)
export default respuesta