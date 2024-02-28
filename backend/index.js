import express from 'express';
import dotenv from "dotenv";
import cors from 'cors'
import aprendizRouter from './routes/aprendizRouter.js'
import usuarioRouters from './routes/usuariosRouters.js';
import proyectoRouters from './routes/proyectoRouters.js';
import fichasRouters from './routes/fichaRouter.js';
import encuestasRouters from './routes/encuestasRouter.js';
import  preguntaRouters  from "./routes/preguntaRouter.js";
import conectarDB from "./config/db.js";
import  tareaRouters  from "./routes/tareRouters.js";
import  respuestasRouter  from "./routes/respuestasRouter.js";
import  detalleEncuesta from "./routes/detalleEncuesta.js";
import  tematicaRouters  from "./routes/tematicaRouters.js";
import  tipoPreguntaRouters  from "./routes/tipoPreguntaRouter.js";
import  intructorRouters  from "./routes/intructorRouter.js";
import encuestadoRouters from "./routes/encuestadoRouters.js"



const app = express();
app.use(express.json());

dotenv.config();
conectarDB();
app.use(cors());

app.use('/api/detalleEncuesta',detalleEncuesta)
app.use('/api/encuesta',encuestasRouters)


app.use('/api/pregunta',preguntaRouters)
app.use('/api/tipoPregunta',tipoPreguntaRouters)
app.use('/api/tematica',tematicaRouters)
app.use('/api/encuestado',encuestadoRouters)


app.use('/api/usuarios',usuarioRouters)
app.use('/api/instructor',intructorRouters)
app.use('/api/fichas',fichasRouters)


app.use('/api/respuesta',respuestasRouter)
app.use('/api/aprendiz',aprendizRouter,)
app.use('/api/proyectos',proyectoRouters)
app.use('/api/tarea',tareaRouters)
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`listening on port ${PORT}`);
});