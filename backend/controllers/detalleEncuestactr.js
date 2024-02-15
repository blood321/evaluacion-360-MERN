import preguntas from "../models/preguntas.js";
import encuesta  from "../models/encuesta.js";
import detalleEncuesta from "../models/detalleEncuesta.js";



const nuevoDetalleEncuesta = async (req, res) => {
    const { encuestaR, preguntaId, } = req.body;

    try {
        // Busca el tipo de pregunta por su ID
        const Pregunta = await preguntas.findById(preguntaId);

        const encuestass = await encuesta.findById(encuestaR);
        if (!Pregunta) {
            return res.status(400).json({ mensaje: 'Pregunta  no encontrados' });
        }

        // Crea la nueva pregunta con los datos proporcionados
        const nuevaPregunta = new detalleEncuesta({
            encuesta:[tipoPregunta2._id],
            
            pregunta: [Pregunta._id], // Añade el ID del tipo de pregunta
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
const obtenerDetallesEcuestas= async (req,res)=>{
    const proyectos =await detalleEncuesta.find().where('responde').equals(req.Usuario)
    res.json(proyectos)
}



export {nuevoDetalleEncuesta,obtenerDetallesEcuestas}