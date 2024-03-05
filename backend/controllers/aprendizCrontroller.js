
import Aprendiz from "../models/aprendiz";
const registrarAprendiz = async (req,res)=>{
    //evitar registros duplicados 
    const ficha =new Aprendiz(req.body)
  
    try {
        const proyectoAlmacenado= await ficha.save()

        res.json(proyectoAlmacenado)
        
    } catch (error) {
        console.log(error)
    }

};

export{registrarAprendiz}