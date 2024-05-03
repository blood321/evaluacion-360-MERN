import mongoose from "mongoose";

const respuestaSchema = mongoose.Schema({
    respuesta: {
        type: String,
        enum: ["Si", "No", "Tal vez", "No sé",""],
        default:""
    },
    pregunta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pregunta"
    },
    aprendiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "instructor"
    },
    encuesta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "encuesta"
    },
    respondio:{
        type:Boolean,
        default:false
    }
});

const Respuesta = mongoose.model("Respuesta", respuestaSchema);
export default Respuesta;
