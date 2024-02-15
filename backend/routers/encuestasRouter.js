import Express  from "express";
import {
    nuevaEncueta
} from '../controllers/encuestactr.js'


const router = Express.Router()
router.route('/')
    
    .post(nuevaEncueta)
   
    


export default router