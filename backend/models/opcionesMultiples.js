import mongoose from "mongoose";


const instructorSchema=mongoose.Schema({
    Nombre:{
        type: String,
        trim:true,
        required:true
    },
    

})

const instructor =mongoose.model('instructor',instructorSchema)
export default instructor