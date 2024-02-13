import express from "express";
import dotenv from "dotenv";
import aprendizRouter from './routers/aprendizRouter.js'
import usuarioRouters from './routers/usuariosRouters.js';
import proyectoRouters from './routers/proyectoRouters.js';
import fichasRouters from './routers/fichaRouter.js';
import encuestasRouters from './routers/encuestasRouter.js';
import  preguntaRouters  from "./routers/preguntaRouter.js";
import conectarDB from "./config/db.js";
import  tareaRouters  from "./routers/tareRouters.js";
import  detalleEncuesta from "./routers/detalleEncuesta.js";
import  tematicaRouters  from "./routers/tematicaRouters.js";
import  tipoPreguntaRouters  from "./routers/tipoPreguntaRouter.js";
import { perfil } from "./controllers/usuarioCtls.js";


const app=express();
app.use(express.json());
dotenv.config();
conectarDB();

//ROuting
app.use('/api/usuarios',usuarioRouters)
app.use('/api/detalleEncuesta',detalleEncuesta)
app.use('/api/tipoPregunta',tipoPreguntaRouters)
app.use('/api/tematica',tematicaRouters)
app.use('/api/fichas',fichasRouters)
app.use('/api/encuesta',encuestasRouters)
app.use('/api/aprendiz',aprendizRouter,)
app.use('/api/proyectos',proyectoRouters)
app.use('/api/usuarios',usuarioRouters)
app.use('/api/tarea',tareaRouters)
app.use('/api/pregunta',preguntaRouters)

const PORT = process.env.PORT || 5500;

app.listen(5500, () =>{
    console.log(`https//localhost:5500 ${PORT}`);
});