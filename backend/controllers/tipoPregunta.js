import tipoPregunta from "../models/tipoPregunta.js"

const nuevoTipoPregunta =async(req,res)=>{
    const proyecto = new tipoPregunta(req.body)

    try {
        const proyectoAlmacenado = await proyecto.save()
        res.json(proyectoAlmacenado)
    } catch (error) {
       console.log(error) 
    }
}
export {nuevoTipoPregunta}