import mongoose from "mongoose";


const programacionSchema=mongoose.Schema({
    
    fichas:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"fichas",
    },
    instructores:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"instructor",
    }],
   
})

const  programacion=mongoose.model('programacion',programacionSchema)
export default programacion