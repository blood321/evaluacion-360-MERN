import mongoose from 'mongoose'
const tareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
        require: true,
    },
    estado:{
        type: Boolean,
        default: false
    },
    fechaEntrega:{
        type: Date,
        require: true, 
        default: Date.now(),
    },
    prioridad: {
        type: String,
        required: true,
        enum: ['alta', 'media', 'baja']
    },
    proyecto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyecto",
    },
},{
    timestamps:true //crea campos createdAt y updatedAt
})

const Tarea = mongoose.model("Tarea", tareaSchema)
export default Tarea