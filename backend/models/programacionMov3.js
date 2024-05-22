import mongoose from "mongoose";


const programacionSchema=mongoose.Schema({
    ficha:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"fichas"
    },
    instructor:  {
        type: mongoose.Schema.Types.ObjectId,
        ref:"instructor",
        required: true
      },
      fechaInicioFormacion: {
        type: Date,
        required: true
      },
      fechaFinFormacion: {
        type: Date,
        required: true
      }
   
})


  
const  programacion=mongoose.model('programacion',programacionSchema)
export default programacion