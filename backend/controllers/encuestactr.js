import encuesta from "../models/encuesta.js"
import tematicas from "../models/tematica.js"

const nuevaEncueta =async (req,res)=>{ 
    const {descripcion,Nombre, tematicaId } = req.body;

    try {
        // Busca el tipo de pregunta por su ID
        const tipoPregunta = await tematicas.findById(tematicaId);
        if (!tipoPregunta) {
            return res.status(400).json({ mensaje: 'tematica no encontrados' });
        }

        // Crea la nueva pregunta con los datos proporcionados
        const nuevaPregunta = new encuesta({
            Nombre,
            descripcion,
            tematica: [tipoPregunta._id], // Añade el ID del tipo de pregunta
            // Añade el ID de la temática
        });

        // Guarda la pregunta en la base de datos
        const preguntaGuardada = await nuevaPregunta.save();

        res.status(201).json(preguntaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el borrador de la encuesta' });
    }
}
export {nuevaEncueta}