import preguntas from "../models/preguntas.js"
import detalleEncuesta from "../models/detalleEncuesta.js";



const nuevoDetalleEncuesta = async (req, res) => {
    const { Nombre, pregunta, } = req.body;

    try {
        // Busca el tipo de pregunta por su ID
        const tipoPregunta = await preguntas.findById(pregunta);
        if (!tipoPregunta) {
            return res.status(400).json({ mensaje: 'Pregunta  no encontrados' });
        }

        // Crea la nueva pregunta con los datos proporcionados
        const nuevaPregunta = new detalleEncuesta({
            Nombre,
            preguntas: [tipoPregunta._id], // Añade el ID del tipo de pregunta
            // Añade el ID de la temática
        });

        // Guarda la pregunta en la base de datos
        const preguntaGuardada = await nuevaPregunta.save();

        res.status(201).json(preguntaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el borrador de la encuesta' });
    }
};



export {nuevoDetalleEncuesta}