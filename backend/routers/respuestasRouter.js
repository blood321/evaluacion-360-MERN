import express from "express";
import { obtenerEncuestas, agregarRespuesta, editarRespuesta, eliminarRespuesta } from '../controllers/respuestasController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

// Obtener todas las respuestas
router.get('/', obtenerEncuestas);

// Agregar una nueva respuesta
router.post('/', checkAuth, agregarRespuesta);

// Editar una respuesta existente
router.put('/:id', checkAuth, editarRespuesta);

// Eliminar una respuesta existente
router.delete('/:id', checkAuth, eliminarRespuesta);

export default router;
