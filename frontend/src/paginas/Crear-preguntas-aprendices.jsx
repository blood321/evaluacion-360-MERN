
import FormularioProyecto from "../components/FormularioPregunta";
import usePreguntas from "../hooks/usePreguntas";
import PreviewPreguntas from "../components/previewPreguntas";
import Tematicas from "../components/Tematicas";
const CrearPreguntasAprendices = () => {
  
    const {preguntas}=usePreguntas();
 
    return (
      <>

        <h1 className="text-4xl font-black">crear peguntas aprendices</h1>
        <div className="bg-white shadow mt-10 rounded-lg ">
            <Tematicas/>
        <FormularioProyecto/>
        <h1 className="text-4xl font-black relative bottom-40">Preguntas</h1>
      <div className="bg-blue-400 shadow mt-10 rounded-lg relative bottom-40">
        {preguntas.length ? 
          preguntas.map(proyecto => (
            <PreviewPreguntas key={proyecto._id} proyecto={proyecto} />
          ))
         : (
          <p className="text-center text-gray-600 uppercase p-5">
            No hay proyectos
          </p>
        )}
      </div>
          
        </div>
      </>
    );
  };
  
  export default CrearPreguntasAprendices;