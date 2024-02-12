import { mongoose } from "mongoose";

const tipoPreguntaSchema =mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
        require:true,
    }}

)
const tipoPregunta =mongoose.model("tipoPregunta",tipoPreguntaSchema)
export default tipoPregunta