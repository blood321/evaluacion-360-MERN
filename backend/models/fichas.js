import mongoose from "mongoose";


const fichasSchema=mongoose.Schema({
    numeroFicha:{
        type:String,
      
    },
    nombreDelPrograma:{
        type:String,
      
    },
    fichaInicio:{
        type: Date,
     
    }, 
    fichaFin:{
        type: Date,
    }, 
    fichaFinETP:{
        type: Date,
    },
    aprendices:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
    }],

})

const  fichas=mongoose.model('fichas',fichasSchema)
export default fichas