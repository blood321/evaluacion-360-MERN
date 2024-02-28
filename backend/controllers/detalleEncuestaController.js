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
try {
    //Busca la ficha del usuario cual inicio sesión 
    const ficheUsuario = await fichas.find().where('aprendices').equals(req.usuario).select("-aprendices -numeroFicha  -__v")
    //Busca los instructores que le dieron clase en la programacion de la ficha 
    const instructoresResponder=await programacion.find().where('fichas').equals(ficheUsuario).select("-_id -fichas -__v")
   //busca la encuesta ligada a la ficha 
    const buscarEncuesta = await detalleEncuesta.find().where('fichas').equals(ficheUsuario).select("-fichas -__v -_id ")
 //console.log(buscarEncuesta)
    //trasforma el buscar Enccuesta a String 
    const resultadoJSON = JSON.stringify(instructoresResponder);
    const resultadoArray = JSON.parse(resultadoJSON); // Convertir la cadena JSON a un array de objetos
    const numeros = resultadoArray.map(item => item.encuesta); // Extraer solo los valores de la propiedad "encuesta"
    //Muestra las preguntas de la encuesta 
    const mostrarPregunta= await encuesta.find({activa:true}).where('_id').equals(numeros).select("-_id  -fechaCreado -tematica -__v -encuestado -nombre -tiempoResponder -activa")
    //console.log(resultadoArray)
    const resultadoJSON2 = JSON.stringify(mostrarPregunta);
     const resultadoArray2 = JSON.parse(resultadoJSON2);
    // const nuevaRespuesta = await new respuesta({ "pregunta": [ resultadoArray2 ] });
    resultadoArray2.forEach(async objeto => {
     try {
        objeto.preguntas.forEach(async preguntaId => {
            // Crear una nueva instancia de respuesta con el identificador de pregunta
            const nuevaRespuesta = new respuesta({ pregunta: preguntaId,  aprendiz:req.Usuario});
      
            // Guardar la nueva respuesta en la base de datos
            await nuevaRespuesta.save()})
     } catch (error) {
        console.error('Error al crear la respuesta:', error);

     }
          // Iterar sobre cada identificador de pregunta en el objeto
       
        
        })
    instructoresResponder.forEach(async objeto => {
            try {
               objeto.instructor.forEach(async instructorId => {
                   // Crear una nueva instancia de respuesta con el identificador de pregunta
                   const nuevaRespuesta = new respuesta({  instructor:instructorId });
             
                   // Guardar la nueva respuesta en la base de datos
                   await nuevaRespuesta.save()})
            } catch (error) {
               console.error('Error al meter al instructor :', error);
       
            }
                 // Iterar sobre cada identificador de pregunta en el objeto
              
               
            })




   




} catch (error) {
     console.log(error)
}    


  
}
  


export {nuevoDetalleEncuesta,obtenerDetallesEcuestas}