import respuesta from "../models/respuestas.js"


 


const obtenerEncuestas=async (req,res)=>{ 
    const proyectos =await respuesta.find().where('usuario').equals(req.Usuario)
    res.json(proyectos)
 }

 export {obtenerEncuestas}