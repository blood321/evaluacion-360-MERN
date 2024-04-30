import Express  from "express";
import {
    nuevaEncuesta,editarEncuesta,eliminarEncuesta,listarEncuestas,
    obtenerEncuesta
} from '../controllers/encuestaController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaEncuesta)
   .get(listarEncuestas)
    router.route('/:id')
    .get(obtenerEncuesta)
    .put(editarEncuesta)
    .delete(eliminarEncuesta)
    router.route('/lista')
    .get(listarEncuestas)

   


export default router