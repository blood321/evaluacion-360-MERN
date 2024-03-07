import Express  from "express";
import {
registrarI
} from '../controllers/intructorController.js'


const router = Express.Router()
router.route('/')
    
    .post(registrarI)


export default router