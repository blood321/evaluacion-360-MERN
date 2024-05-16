import Express from "express";
import { subirAprendices, subirFichas, sacarReportes } from "../controllers/exelController.js";
import multer from 'multer';

// Corregir la ruta del destino de la carga de archivos
const upload = multer({ dest: '../subidos' });

const router = Express.Router();

router.route("/aprendices")
  .post(subirAprendices);

router.route("/fichas")
  .post(upload.single('file'), subirFichas);

router.route('/Reporte/:id')
 .get(sacarReportes)

export default router;

