import mongoose, { Mongoose } from 'mongoose'

const proyectosSchema = mongoose.Schema({
    nombre: {
        type:String,
        trim: true,
        required: true,
    },
    descripcion: {
        type:String,
        trim: true,
        required: true,
    },
    fechaEntrega:{
        type:Date,
        default: Date.now()
    },
    cliente: {
        type:String,
        trim: true,
        required: true,
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario', //referencia a la tabla Usuarios
    },
    colaboradores:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Usuario', //referencia a la tabla Usuarios
        },
    ],
},{
    timestamps: true,
}
)

const Proyecto = mongoose.model('Proyecto', proyectosSchema)
export default Proyecto