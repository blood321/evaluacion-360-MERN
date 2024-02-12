import mongoose from "mongoose";


const fichasSchema=mongoose.Schema({
    numeroFicha:{
        type:String,
        trim:true,
        required:true
    },
    fichaInico:{
        type: Date,
        trim:true,
        required:true
    }, 
    fichaFin:{
        type: Date,
        trim:true,
        required:true
    }, 
    fichaFinETP:{
        type: Date,
        trim:true,
        required:true
    },
    aprendices:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"aprendiz",
    }],
    instructores:     
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"instructor",
    }],
})

const  fichas=mongoose.model('fichas',fichasSchema)
export default fichas