import mongoose from "mongoose";


const aprendizSchema=mongoose.Schema({ 
    nombre:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,  
        required:true,
        trim:true
    }, 
    tipoDocumento:{
        type: String,
        
    },
    numeroDocumento:{
        type: String,
        
    },
    confirmado:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true,
})

const aprendiz =mongoose.model('aprendiz',aprendizSchema)
export default aprendiz