import preguntas from "../models/preguntas.js";
import encuesta  from "../models/encuesta.js";
import detalleEncuesta from "../models/detalleEncuesta.js";
import fichas from "../models/fichas.js";
import Usuario from "../models/Usuarios.js";
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


try {
    //Busca la ficha del usuario cual inicio sesión 
    const ficheUsuario = await fichas.find({aprendices:req.usuario._id},'_id')
    console.log(ficheUsuario)
      //Busca los instructores que le dieron clase en la programacion de la ficha 
    const instructoresResponder=await programacion.find({fichas:ficheUsuario},'instructores')
    console.log(instructoresResponder)
   //busca la encuesta ligada a la ficha 
    const buscarEncuesta = await detalleEncuesta.find().where('fichas').equals(ficheUsuario).select("-fichas -__v -_id ")
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
    //console.log(resultadoI)
   // console.log(buscarEncuestaParaGuardarEnRespuestas)
   // console.log(resultadoArray2)
     resultadoI.forEach(async objeto => {
             try {
                 console.log(objeto.instructores)
                objeto.instructores.forEach(async instructorId => {
                    console.log(typeof(instructorId))
                    resultadoArray2.forEach(async objeto => {
                            try {
                               objeto.preguntas.forEach(async preguntaId => {
                                    //Crear una nueva instancia de respuesta con el identificador de pregunta
                                   const nuevaRespuesta = new Respuesta({pregunta:preguntaId,aprendiz:req.usuario._id,instructor:instructorId, encuesta:buscarEncuestaParaGuardarEnRespuestas })
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
    const inpuestoss = await Respuesta.find({aprendiz:"65ccc08ee73c05dbd4ea8763"}).populate('pregunta instructor encuesta')
    res.json(inpuestoss)
}




export {nuevoDetalleEncuesta,obtenerDetallesEcuestas,mostrasRespuestas }