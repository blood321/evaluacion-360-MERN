import { mongoose } from "mongoose";

const tematicaSchema =mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
        require:true,
    }}

)
const tematica =mongoose.model("tematica",tematicaSchema)
export default tematica