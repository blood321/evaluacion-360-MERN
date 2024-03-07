import mongoose from "mongoose";


const detalleEncuestaSchema=mongoose.Schema({
    encuesta:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"encuesta",
    },
    fichas:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"fichas"
    },
    activa:{
        type:Boolean,
        default:false
    }
   

})
const detalleEncuesta =mongoose.model('detalleEncuesta',detalleEncuestaSchema)
export default detalleEncuesta