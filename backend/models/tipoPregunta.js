import { mongoose } from "mongoose";

const tipoPreguntaSchema =mongoose.Schema({
    tipo:{
        type:String,
        trim:true,
        require:true,
    }}

)
const tipoPregunta =mongoose.model("tipoPregunta",tipoPreguntaSchema)
export default tipoPregunta