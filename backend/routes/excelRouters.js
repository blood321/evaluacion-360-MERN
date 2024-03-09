import Express  from "express";
import { nuevoExcel } from "../controllers/exelController";


const router = Express.Router()
router.route('/')
    
    .post(nuevaEncuesta)
   
    router.route('/:id')
    
    .put(editarEncuesta)
    .delete(eliminarEncuesta)
   


export default router