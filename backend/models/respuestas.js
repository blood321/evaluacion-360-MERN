import mongoose from "mongoose";

const respuestaSchema = mongoose.Schema({
    respuesta: {
        type: String,
        enum: ["4", "3", "2", "1", ""], // Permitir cadena vacía como opción
        default: "" // Establecer cadena vacía como valor predeterminado
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
    respondio: {
        type: Boolean,
        default: false
    }
});

// Agregar función previa a la validación para manejar la cadena vacía en aprendiz
respuestaSchema.pre('validate', function(next) {
    // Si aprendiz es una cadena vacía, establecerlo como null
    if (this.aprendiz === "") {
        this.aprendiz = null;
    }
    next();
});

const Respuesta = mongoose.model("Respuesta", respuestaSchema);
export default Respuesta;
