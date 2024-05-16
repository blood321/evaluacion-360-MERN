import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.routes.js";
import fichasRouters from "./routes/fichaRouter.js";
import encuestasRouters from "./routes/encuestasRouter.js";
import preguntaRouters from "./routes/preguntaRouter.js";
import respuestasRouter from "./routes/respuestasRouter.js";
import DetalleEncuesta from "./routes/DetalleEncuesta.js";
import tematicaRouters from "./routes/tematicaRouters.js";
import programacionRouters from "./routes/programacionRouters.js";
import aprendizRoutes from "./routes/aprendiz.routes.js";
import excelRouters from "./routes/excelRouters.js";
import conectarDB from "./config/db.js";
import instructorRoutes from "./routes/instructorRoutes.js";
import encuesta from "./models/encuesta.js";
import detalleEncuesta from "./models/detalleEncuesta.js";

const app = express();
app.use(express.json());

dotenv.config();
conectarDB();
app.use(cors());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/detalleEncuesta", DetalleEncuesta);
app.use("/api/encuesta", encuestasRouters);
app.use("/api/programacion", programacionRouters);

app.use("/api/pregunta", preguntaRouters);
app.use("/api/tematica", tematicaRouters);

app.use("/api/aprendiz", aprendizRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/instructor", instructorRoutes);
app.use("/api/fichas", fichasRouters);

app.use("/api/Excel", excelRouters);

app.use("/api/respuesta", respuestasRouter);
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`listening on port ${PORT}`);
});


/* Funcion para desactivar encuestas en automatico  */
async function verificarEncuestas() {
  try {
    const ahora = new Date();
    // Buscar encuestas activas cuya fecha de finalización ha pasado
    const DetalleADesactivar = await detalleEncuesta.find({
      activa: true,
      fechaDesactivar: { $lt: ahora },
    });
    const data = DetalleADesactivar.map((item) => item.id);
    console.log(data);

    const EncuestaADesactivar = await encuesta.find({activa:true})

    for (const encuesta of EncuestaADesactivar) {
      encuesta.activa = false; // Desactivar la encuesta
      await encuesta.save(); // Guardar los cambios en la base de datos
    }


    for (const detalle of DetalleADesactivar) {
      detalle.activa = false; // Desactivar la encuesta
      await detalle.save(); // Guardar los cambios en la base de datos
    }


    console.log(
      `Verificación completada: ${DetalleADesactivar.length} encuestas desactivadas.`
    );
  } catch (error) {
    console.error("Error al verificar encuestas:", error);
  }
}

setInterval(verificarEncuestas, 3600000);

verificarEncuestas();
