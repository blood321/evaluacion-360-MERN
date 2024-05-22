import programacion from "../models/programacionMov3.js";

const crearProgramacion =async(req,res)=>{
    
    const Programacion =new programacion(req.body)
  
    try {
        const programacionG= await Programacion.save()

        res.json(programacionG)
        
    } catch (error) {
        console.log(error)
    }
   
}

export  {crearProgramacion}