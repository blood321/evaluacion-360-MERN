import mongoose from "mongoose";


const programaSchema=mongoose.Schema({
    Nombre:{
        type: String,
        trim:true,
        required:true
    },
   


})

const programa =mongoose.model('programa',programaSchema)
export default programa