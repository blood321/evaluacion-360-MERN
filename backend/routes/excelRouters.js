import Express from "express";
import {
  subirAprendices,
  subirFichas,
  sacarReportes,
  subirProgramacion,
} from "../controllers/exelController.js";
import multer from "multer";

// Corregir la ruta del destino de la carga de archivos
const upload = multer({ dest: "../subidos" });

const router = Express.Router();

router.route("/aprendices").post(subirAprendices);

router.route("/fichas").post(upload.single("file"), subirFichas);

router.route("/Reporte/:id").get(sacarReportes);

// router.route('/subirProgramacion').post(upload.single("file"),subirProgramacion)

export default router;
