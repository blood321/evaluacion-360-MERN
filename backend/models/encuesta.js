import mongoose from "mongoose";


const encuestaSchema=mongoose.Schema({
    fecha:{
        type: Date,
        default:Date.now(),
        required:true
    },
    descripcion:{
        type: String,
        trim:true,
        required:true
    },
    tematica:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"tematica",
        require:true
    }
    

 

    
})
const encuesta =mongoose.model('encuesta',encuestaSchema)
export default encuesta