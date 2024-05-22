import mongoose from "mongoose";


const papeleraSchema=mongoose.Schema({
    aprendiz:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"aprendiz",

    },
    detalleEncuesta:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"detalleEncuesta",
    },
    pregunta:{
        type:mongoose.Schema.Types.ObjectId,
        
    },
    respuesta:
    {
        type:String,
        trim:true
    }


})

const papelera =mongoose.model('papelera',papeleraSchema)
export default papelera