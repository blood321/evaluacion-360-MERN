import mongoose from "mongoose";


const detalleEncuestaSchema=mongoose.Schema({
    encuesta:     
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"encuesta",
    },
    fichas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"fichas"
    }],
    fechaActivacion:{
        type: Date,
        required: true,
        default: Date.now(),
    },
    fechaDesactivar:{
        type: Date,
     
    },
    activa:{
        type:Boolean,
        
    }

   

})
const detalleEncuesta =mongoose.model('detalleEncuesta',detalleEncuestaSchema)
export default detalleEncuesta