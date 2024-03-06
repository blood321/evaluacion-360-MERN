import Express from "express";
import {
  nuevaEncuesta,
  editarEncuesta,
  eliminarEncuesta,
  nuevaEncuestaParaAprendices,
  nuevaEncuestaParaJefes,
  nuevaEncuestaParacompaneros
} from "../controllers/encuestaController.js";

const router = Express.Router();
router.route("/crear-encuesta-aprendices").post(nuevaEncuestaParaAprendices);
router.route("/crear-encuesta-jefes").post(nuevaEncuestaParaJefes);
router.route("/crear-encuesta-compañeros").post(nuevaEncuestaParacompaneros);









router
  .route("/:id")
  .put(editarEncuesta)
  .delete(eliminarEncuesta);

export default router;
