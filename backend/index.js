import express from 'express';
import conectarDB from './config/db.js';
import dotenv from "dotenv";
import cors from 'cors'
import usuarioRoutes from "./routes/usuario.routes.js";
import proyectoRoutes from "./routes/proyecto.routes.js";
import tareaRoutes from "./routes/tarea.routes.js";
import aprendizRoutes from "./routes/aprendiz.routes.js";

const app = express();
app.use(express.json());

dotenv.config();
conectarDB();
app.use(cors());

app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', proyectoRoutes)
app.use('/api/tareas', tareaRoutes)
app.use('/api/aprendiz', aprendizRoutes)

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`listening on port ${PORT}`);
});