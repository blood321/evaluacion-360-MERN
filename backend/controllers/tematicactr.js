import tematica from "../models/tematica.js"

const nuevaTematica =async(req,res)=>{
    const proyecto = new tematica(req.body)

    try {
        const proyectoAlmacenado = await proyecto.save()
        res.json(proyectoAlmacenado)
    } catch (error) {
       console.log(error) 
    }
}
export {nuevaTematica}