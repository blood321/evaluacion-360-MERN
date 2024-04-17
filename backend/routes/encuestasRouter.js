import Express  from "express";
import {
    nuevaEncuesta,editarEncuesta,eliminarEncuesta,listarEncuestas
} from '../controllers/encuestaController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaEncuesta)
   .get(listarEncuestas)
    router.route('/:id')
    
    .put(editarEncuesta)
    .delete(eliminarEncuesta)
    router.route('/lista')
    .get(listarEncuestas)

   


export default router