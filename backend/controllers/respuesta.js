import Respuesta from "../models/respuestas.js";

// Controlador para obtener todas las encuestas
const obtenerEncuestas = async (req, res) => {
    try {
        // Aquí podrías realizar alguna lógica para obtener las encuestas
        // Por ejemplo, podrías buscar todas las respuestas
        const encuestas = await Respuesta.find();
        res.json(encuestas);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Controlador para agregar una nueva respuesta
const agregarRespuesta = async (req, res) => {
    try {
        const nuevaRespuesta = new Respuesta(req.body);
        const respuestaGuardada = await nuevaRespuesta.save();
        res.status(201).json(respuestaGuardada);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Controlador para editar una respuesta existente
const editarRespuesta = async (req, res) => {
    const { id } = req.params;
    const { Respuesta, Multiple, Escala } = req.body;

    try {
        const respuestaActualizada = await Respuesta.findByIdAndUpdate(id, { Respuesta, Multiple, Escala }, { new: true });
        res.json(respuestaActualizada);
    } catch (error) {
        res.status(404).json({ mensaje: error.message });
    }
};

// Controlador para eliminar una respuesta existente
const eliminarRespuesta = async (req, res) => {
    const { id } = req.params;

    try {
        await Respuesta.findByIdAndDelete(id);
        res.json({ mensaje: 'Respuesta eliminada' });
    } catch (error) {
        res.status(404).json({ mensaje: error.message });
    }
};

export { obtenerEncuestas, agregarRespuesta, editarRespuesta, eliminarRespuesta };
