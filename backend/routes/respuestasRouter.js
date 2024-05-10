import Express from "express";
import {
  respuestaUsuario,
  respuestaXEncuesta,
  respuestasXInstructor
} from "../controllers/respuestaController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = Express.Router();
router.route("/:id").put(respuestaUsuario);

router.route('/respuestasDeEncuestas/:id').get(respuestaXEncuesta);
router.route('/respuestasDeEncuestas/:id/instructor/:instructor').get(respuestasXInstructor)
export default router;
