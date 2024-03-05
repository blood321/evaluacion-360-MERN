import mongoose from "mongoose";


const equipoEjecutorSchema=mongoose.Schema({
    nombreEquipo:{
        type: String,
        trim:true,
        required:true
    }, 
    lider:   
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"instructor",
    },
    miembros:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"instructor"
    }]
})

const  equipoEjecutor=mongoose.model('equipoEjecutor',equipoEjecutorSchema)
export default equipoEjecutor