import { mongoose } from "mongoose";

const respuestaEscalaSchema =mongoose.Schema({
   enum:{
    type:String,
    enum:["mucho","medio","poco"]
   }
  
})
const respuestaEscala =mongoose.model("respuestaEscala",respuestaEscalaSchema)
export default respuestaEscala