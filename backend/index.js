import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.routes.js";
import fichasRouters from "./routes/fichaRouter.js";
import encuestasRouters from "./routes/encuestasRouter.js";
import preguntaRouters from "./routes/preguntaRouter.js";
import respuestasRouter from "./routes/respuestasRouter.js";
import detalleEncuesta from "./routes/detalleEncuesta.js";
import tematicaRouters from "./routes/tematicaRouters.js";
import intructorRouters from "./routes/intructorRouter.js";
import programacionRouters from "./routes/programacionRouters.js";
import aprendizRoutes from "./routes/aprendiz.routes.js";

import conectarDB from "./config/db.js";

const app = express();
app.use(express.json());

dotenv.config();
conectarDB();
app.use(cors());

app.use("/api/detalleEncuesta", detalleEncuesta);
app.use("/api/encuesta", encuestasRouters);
app.use("/api/programacion", programacionRouters);

app.use("/api/pregunta", preguntaRouters);
app.use("/api/tematica", tematicaRouters);

app.use("/api/aprendiz", aprendizRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/instructor", intructorRouters);
app.use("/api/fichas", fichasRouters);

app.use("/api/respuesta", respuestasRouter);
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`listening on port ${PORT}`);
});
