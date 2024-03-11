import Express  from "express";
import { nuevoExcel } from "../controllers/exelController.js";


const router = Express.Router()
router.route('/')
    
    .post(nuevoExcel)
   
   


export default router