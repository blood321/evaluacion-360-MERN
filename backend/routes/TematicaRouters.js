import Express  from "express";
import {
 nuevaTematica
} from '../controllers/tematicaContoller.js'
const router = Express.Router()
router.route('/')
    .post(nuevaTematica)
export default router