import Express from "express";
import { subirAprendices, subirFichas } from "../controllers/exelController.js";

const router = Express.Router();
router
  .route("/aprendices")

  .post(subirAprendices);

router
  .route("/fichas")

  .post(subirFichas);

export default router;
