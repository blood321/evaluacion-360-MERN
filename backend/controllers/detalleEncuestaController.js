import preguntas from "../models/preguntas.js";
import encuesta  from "../models/encuesta.js";
import detalleEncuesta from "../models/detalleEncuesta.js";
import fichas from "../models/fichas.js";
import Usuario from "../models/Usuario.js";
import programacion from "../models/programacionMov3.js"
import Respuesta from "../models/respuestas.js";

const nuevoDetalleEncuesta = async (req, res) => {
    //en postman se deben poner estas constates en ves de las del modelo 
    const {encuestaG,fichasG} = req.body

    try {
        // Busca la encuesta por su id 
        const encuestas =await encuesta.findById(encuestaG);
        if (!encuestas){
            res.json({msg:" la encuesta no existe "})
        }
        //busca la ficha por su id 
        const ficha =await fichas.findById(fichasG);
        console.log(ficha._id)

        // Crea la nueva pregunta con los datos proporcionados
        const nuevaPregunta = new detalleEncuesta({
            encuesta:[encuestas._id],
            fichas:[ficha._id]

        });


        // Guarda la pregunta en la base de datos
        const preguntaGuardada = await nuevaPregunta.save();

        res.status(201).json(preguntaGuardada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el borrador de la encuesta' });
    }
};
const obtenerDetallesEcuestas= async (req,res)=>{
 const {id} = req.params
 console.log(id)
 try{ 
        
    const usuario = await Usuario.findOne({_id:id})
    console.log(usuario)
    //Busca la ficha del usuario cual inicio sesión 
    const fichaUsuario  = await fichas.find({aprendices:usuario},'_id')
    console.log(fichaUsuario)
      //Busca los instructores que le dieron clase en la programacion de la ficha 
    const instructoresResponder=await programacion.find({fichas:fichaUsuario},'instructores')
    console.log(instructoresResponder)
   //busca la encuesta ligada a la ficha 
    const buscarEncuesta = await detalleEncuesta.find().where('fichas').equals(fichaUsuario).select("-fichas -__v -_id ")
    //trasforma el buscar Enccuesta a String 
    const encuestaString = JSON.stringify(buscarEncuesta);
    const encuestaArray = JSON.parse(encuestaString); // Convertir la cadena JSON a un array de objetos
    const encuestasID = encuestaArray.map(item => item.encuesta);
    const buscarEncuestaParaGuardarEnRespuestas=await encuesta.findById().where('_id').equals(encuestasID).select("-nombre -fechaCreado -tiempoResponder -preuntas -encuestado -activa -__v")
    //Muestra las preguntas de la encuesta y tambien se encuetre activa ya que pueden exister varias encuestas a la ves pero una sola se responde 
    const mostrarPregunta= await encuesta.find({activa:true}).where('_id').equals(encuestasID).select("-_id  -fechaCreado -tematica -__v -encuestado -nombre -tiempoResponder -activa")
    const resultadoJSON2 = JSON.stringify(mostrarPregunta);
    const resultadoArray2 = JSON.parse(resultadoJSON2);
    const resultadoInstructores = JSON.stringify(instructoresResponder);
    const resultadoI = JSON.parse(resultadoInstructores);
    
     resultadoI.forEach(async objeto => {
             try {
                 console.log(objeto.instructores)
                objeto.instructores.forEach(async instructorId => {
                    console.log(typeof(instructorId))
                    resultadoArray2.forEach(async objeto => {
                            try {
                               objeto.preguntas.forEach(async preguntaId => {
                                    //Crear una nueva instancia de respuesta con el identificador de pregunta
                                   const nuevaRespuesta = new Respuesta({pregunta:preguntaId,aprendiz:usuario,instructor:instructorId, encuesta:buscarEncuestaParaGuardarEnRespuestas })
                                   // Guardar la nueva respuesta en la base de datos
                                   const respug=  await nuevaRespuesta.save()
                                  console.log(respug)
                               })
                               } catch (error) {
                                   console.error('Error al crear la respuesta:', error); 
                               }
                           })
                   })
         } catch (error) {
              console.error('Error al meter al instructor :', error);
            }
             })
             
} catch (error) {
     console.log(error)
}    
 }
const mostrasRespuestas =async (req,res)=>{
    const {email} = req.params
    console.log(email)

    try {
        const usuario = await Usuario.findOne({email:email})
        console.log(usuario)
         const inpuestoss = await Respuesta.find({aprendiz:usuario}).populate('pregunta instructor encuesta')
         res.json(inpuestoss)
    } catch (error) {
        console.log(error)
    }

}




export {nuevoDetalleEncuesta,obtenerDetallesEcuestas,mostrasRespuestas }