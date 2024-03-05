import Express  from "express";
import {
    nuevaEncuesta,editarEncuesta,eliminarEncuesta
} from '../controllers/encuestaController.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaEncuesta)
   
    router.route('/:id')
    
    .put(editarEncuesta)
    .delete(eliminarEncuesta)
   


export default router