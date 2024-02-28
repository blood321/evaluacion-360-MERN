import mongoose from "mongoose";
 
const proyectoSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim:true,
        required:true
    },
    descripcion:{
        type: String,
        trim:true,                                     
        required:true
    },
    fechaEntrega:{
        type: Date,
        default:Date.now(),
    },
    cliente:{
        type: String,
        trim:true,
        required:true
    },
    creador:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
    },
    colaboladores:
            
        [{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Usuario",
        }],
},{
    timestamps:true,
}
)
const proyecto =mongoose.model('proyecto',proyectoSchema)
export default proyecto