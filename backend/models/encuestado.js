import mongoose from "mongoose";


const encuestadoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
})
const encuestado =mongoose.model('encuestado',encuestadoSchema)
export default encuestado