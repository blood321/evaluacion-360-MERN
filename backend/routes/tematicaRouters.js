import Express  from "express";
import {
 nuevaTematica
} from '../controllers/tematicaController.js'
const router = Express.Router()
router.route('/')
    .post(nuevaTematica)
    router.route("/listar-tematicas")
    .get(tematicas)
export default router
