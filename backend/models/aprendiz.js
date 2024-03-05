import mongoose from "mongoose";


const AprendizSchema=mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        trim:true
<<<<<<< HEAD
    }, 
    token:{
        type: String,
        
    },
    confirmado:{
=======
    },   
    activo:{
>>>>>>> 3493d86b6d011d0fe8a5697d130816b934e9653b
        type:Boolean,
        default:false,
    }
},{
    timestamps:true,
})

<<<<<<< HEAD
const aprendiz =mongoose.model('aprendiz',aprendizSchema)
export default aprendiz
=======
const Aprendiz =mongoose.model('Aprendiz', AprendizSchema)
export default Aprendiz
>>>>>>> 3493d86b6d011d0fe8a5697d130816b934e9653b
