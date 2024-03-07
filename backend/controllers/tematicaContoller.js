import tematica from "../models/tematica"

const nuevaTematica =async(req,res)=>{
    const tematicaN = new tematica(req.body)

    try {
        const tematicaAlmacenada = await tematicaN.save()
        res.json(tematicaAlmacenada)
    } catch (error) {
       console.log(error) 
    }
}
export {nuevaTematica}