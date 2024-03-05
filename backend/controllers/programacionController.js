import programacion from "../models/programacionMov3.js";

const crearProgramacion =async(req,res)=>{
    
    const programacionG =new programacion(req.body)
  
    try {
        const proyectoAlmacenado= await programacionG.save()

        res.json(proyectoAlmacenado)
        
    } catch (error) {
        console.log(error)
    }
   
}

export  {crearProgramacion}