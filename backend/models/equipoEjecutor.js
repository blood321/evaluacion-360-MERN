import mongoose from "mongoose";


const equipoEjecutorSchema=mongoose.Schema({
    NombreEquipo:{
        type: String,
        trim:true,
        required:true
    }, 
    Lider:   
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"instructor",
    }],
})

const  equipoEjecutor=mongoose.model('equipoEjecutor',equipoEjecutorSchema)
export default equipoEjecutor