import tipoPregunta from "../models/tipoPregunta.js"

const nuevoTipoPregunta =async(req,res)=>{
    const tipoPreguntaNew = new tipoPregunta(req.body)

    try {
        const tipoPreguntaAlmacenada = await tipoPreguntaNew.save()
        res.json(tipoPreguntaAlmacenada)
    } catch (error) {
       console.log(error) 
    }
}

export {nuevoTipoPregunta}