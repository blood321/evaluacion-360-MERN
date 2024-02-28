import preguntas from "../models/preguntas.js"
import tematicas from"../models/tematica.js"
import tipoPreguntas from"../models/tipoPregunta.js"
import respuesta from "../models/respuestas.js"


const nuevaPregunta = async (req, res) => {
    const { pregunta,  tematicaId, tipoId,respuestaG} = req.body;

    try {
        const tematica = await tematicas.findById(tematicaId);
        const tipoPregunta = await tipoPreguntas.findById(tipoId);
        const nuevaPregunta = new preguntas({
            pregunta,
            tematica: [tematica._id],
            tipo: [tipoPregunta._id]
        
        });
        nuevaPregunta.save()
            .then(async objetoCreado => {
                 const nuevoId = objetoCreado._id;
    // Ahora puedes usar nuevoId como necesites
      const nuevarespuesta = new respuesta({
            pregunta:[nuevoId]
        });
        const respuestaAlmacenada=  await nuevarespuesta.save()

            console.log(respuestaAlmacenada)
            
 
})
     // Guarda la pregunta en la base de datos
      //  const preguntaGuardada = await nuevaPregunta.save();
       // res.json(nuevaPregunta)
        console.log(nuevaPregunta)

  
        
      
       




        // Modificar el enum del esquema
    
        // Guardar el esquema modificado
 

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear la pregunta' });
    }
};
const editarPregunta =async (req,res)=>{
    const { id } = req.params
    const preguntaEdit = await preguntas.findById(id)
    
    if (!preguntaEdit) {
        const error = new Error("no encontrado")
        return res.status(404).json({ msg: error.message})
    }

   
    preguntaEdit.pregunta = req.body.pregunta || preguntaEdit.pregunta
    preguntaEdit.tematica=req.body.tematica|| preguntaEdit.tematica
    preguntaEdit.tipo=req.body.tipo||preguntaEdit.tipo

    try {
        const proyectoAlmacenado = await preguntaEdit.save()
        res.json(proyectoAlmacenado)
    } catch (error) {
        console.log(error)
    }
}
const eliminarPregunta =async(req,res)=>{
    const { id }=req.params
    const preguntaDelete=await preguntas.findById(id)
    console.log(preguntaDelete)
    if (!preguntaDelete){
        const error =new Error("No encontrado")

        return res.status(404).json({msg:error.message})
    }
 
    try {
       await preguntaDelete.deleteOne()
       res.json({msg:"pregunta  Eliminada"}) 
    } catch (error) {
        console.log(error)
    }
}
const obtenerPregunta =async (req,res)=>{
const {id}=req.body;

try {
    
    const pregunta= await preguntas.findById(id);
    res.json(pregunta)
    
} catch (error) {
    console.log(error)
}
}

const obtenerPreguntas =async (req,res)=>{
 const preguntasObtenidas=await preguntas.find();
 res.json(preguntasObtenidas)
}


export {nuevaPregunta,editarPregunta,eliminarPregunta,obtenerPregunta,obtenerPreguntas}