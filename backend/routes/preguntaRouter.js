import Express  from "express";
import {
   nuevaPregunta,editarPregunta,eliminarPregunta,obtenerPreguntas,obtenerPregunta
} from '../controllers/preguntasController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaPregunta)
    
    .get(obtenerPreguntas)
    router.route('/:id')
    .get(obtenerPregunta)
    .put(editarPregunta)
    .delete(eliminarPregunta)
    
   

export default router