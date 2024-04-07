import Express  from "express";
import {
    nuevaEncuesta,editarEncuesta,eliminarEncuesta,listarEncuesta
} from '../controllers/encuestaController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaEncuesta)
   
    router.route('/:id')
    
    .put(editarEncuesta)
    .delete(eliminarEncuesta)
    router.route('/lista')
    .get(listarEncuesta)

   


export default router