import respuesta from "../models/respuestas.js"

const respuestaUsuario=async (req,res)=>{
    const{instructor,pregunta}=req.body

    try {
        const respuestasubir = await respuesta.findOne({instructor:instructor, pregunta:pregunta, aprendiz:req.usuario._id})
        if (!respuestasubir) {
            const error = new Error("no encontrado")
            return res.status(404).json({ msg: error.message})
        }
        respuestasubir.respuesta=req.body.respuesta
console.log(respuestasubir)
        const a= await respuestasubir.save()
         res.json(a)
    } catch (error) {
        console.log(error)
    }
}

export {respuestaUsuario}