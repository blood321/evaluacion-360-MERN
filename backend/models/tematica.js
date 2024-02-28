import { mongoose } from "mongoose";

const tematicaSchema =mongoose.Schema({
    tematica:{
        type:String,
        trim:true,
        require:true,
    }}

)
const tematica =mongoose.model("tematica",tematicaSchema)
export default tematica