import encuesta from "../models/encuesta.js"


const nuevaEncueta =async (req,res)=>{ 
    const encuesta =new encuesta (req.body)
    try {
        const proyectoAlmacenado= await encuesta.save()
        res.json(proyectoAlmacenado)     
    } catch (error) {
        console.log(error)
    }
}
export {nuevaEncueta}