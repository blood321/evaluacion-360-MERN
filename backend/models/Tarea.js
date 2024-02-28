import { mongoose } from "mongoose";

const tareaSchema =mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
        require:true,
    },
    descripcion:{
        type:String,
        trim:true,
        require:true,
    },
    estado:{
        type:Boolean,
        default:false,
    },
    fechaEntrega:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    prioridad:{
        type:String,
        requered:true,
        enum:['baja','Media','Alta'],
    },
    Proyecto:{
        type:mongoose.Schema.Types.objectId,
        ref:"proyecto",

    },
},{
    timestamps:true
    }
)
const Tarea =mongoose.model("Tarea",tareaSchema)
export default Tarea