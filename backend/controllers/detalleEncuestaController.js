import preguntas from "../models/preguntas.js";
import encuesta  from "../models/encuesta.js";
import detalleEncuesta from "../models/detalleEncuesta.js";
import fichas from "../models/fichas.js";
import Usuario from "../models/Usuarios.js";
import programacion from "../models/programacionMov3.js"
import respuesta from "../models/respuestas.js";


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

    console.log()

try {
    //Busca la ficha del usuario cual inicio sesión 
    const ficheUsuario = await fichas.find().where('aprendices').equals(req.usuario).select("-aprendices -numeroFicha  -__v")
    //Busca los instructores que le dieron clase en la programacion de la ficha 
    const instructoresResponder=await programacion.find().where('fichas').equals(ficheUsuario).select("-_id -fichas -__v")
   //busca la encuesta ligada a la ficha 
    const buscarEncuesta = await detalleEncuesta.find().where('fichas').equals(ficheUsuario).select("-fichas -__v -_id ")
    //trasforma el buscar Enccuesta a String 
    const encuestaString = JSON.stringify(buscarEncuesta);
    const encuestaArray = JSON.parse(encuestaString); // Convertir la cadena JSON a un array de objetos
    const encuestasID = encuestaArray.map(item => item.encuesta);
    //Muestra las preguntas de la encuesta y tambien se encuetre activa ya que pueden exister varias encuestas a la ves pero una sola se responde 
    const mostrarPregunta= await encuesta.find({activa:true}).where('_id').equals(encuestasID).select("-_id  -fechaCreado -tematica -__v -encuestado -nombre -tiempoResponder -activa")
    const resultadoJSON2 = JSON.stringify(mostrarPregunta);
    const resultadoArray2 = JSON.parse(resultadoJSON2);

    console.log(encuestasID)
    
    //console.log(buscarEncuesta)
   
    console.log(instructoresResponder)



    resultadoArray2.forEach(async objeto => {
     try {
        objeto.preguntas.forEach(async preguntaId => {
            // Crear una nueva instancia de respuesta con el identificador de pregunta
           
            const nuevaRespuesta = new respuesta(req.body)
            nuevaRespuesta.pregunta=preguntaId
            nuevaRespuesta.aprendiz=req.Usuario._id
            // Guardar la nueva respuesta en la base de datos
            const respug=  await nuevaRespuesta.save()
          //  console.log(respug)
        })
        } catch (error) {
            console.error('Error al crear la respuesta:', error);
            
        }
    })

    // instructoresResponder.forEach(async objeto => {
    //         try {
    //            objeto.instructor.forEach(async instructorId => {
    //                // Crear una nueva instancia de respuesta con el identificador de pregunta
    //                const nuevaRespuesta = new respuesta({  instructor:instructorId });
             
    //                // Guardar la nueva respuesta en la base de datos
    //                await nuevaRespuesta.save()})
    //         } catch (error) {
    //            console.error('Error al meter al instructor :', error);
       
    //         }
    //              // Iterar sobre cada identificador de pregunta en el objeto
              
               
    //         })




   




} catch (error) {
     console.log(error)
}    


  
}
  


export {nuevoDetalleEncuesta,obtenerDetallesEcuestas}