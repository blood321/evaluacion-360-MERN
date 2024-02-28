import encuestado from '../models/encuestado.js'

const nuevoencuestado =async(req,res)=>{
    const proyecto = new encuestado(req.body)

    try {
        const proyectoAlmacenado = await proyecto.save()
        res.json(proyectoAlmacenado)
    } catch (error) {
       console.log(error) 
    }
}

export { nuevoencuestado }