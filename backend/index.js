//const express = require("express");
import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRouter from './routes/proyectoRouter.js'
import tareaRouter from './routes/tareaRoutes.js'


const app = express();
app.use(express.json())

dotenv.config();
conectarDB();

//routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', proyectoRouter)
app.use("/api/tareas", tareaRouter);


const PORT = process.env.PORT || 7070;
app.listen(4000, () => { 
    console.log(`Server is running on port ${PORT}`)
});
