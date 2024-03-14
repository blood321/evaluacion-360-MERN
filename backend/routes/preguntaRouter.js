import Express  from "express";
import {
   nuevaPregunta,editarPregunta,eliminarPregunta,obtenerPreguntas,obtenerPreguntasParaAprendiz,obtenerPreguntasParaCompañeros,obtenerPreguntasParaJefes
} from '../controllers/preguntasController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaPregunta)
    .get(obtenerPreguntas)
    router.route('/:id')
    .put(editarPregunta)
    .delete(eliminarPregunta)
    
    router.route('/preguntas-jefes/')
    .get(obtenerPreguntasParaJefes)

    router.route('/preguntas-Compañeros')
    .get(obtenerPreguntasParaCompañeros)

    router.route('/preguntas-Aprendices')
    .get(obtenerPreguntasParaAprendiz)
  
    
   

export default router