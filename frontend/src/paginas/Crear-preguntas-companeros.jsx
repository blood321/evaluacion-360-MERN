import usePreguntas from "../hooks/usePreguntas";
import PreviewPreguntas from "../components/previewPreguntas";
import FormularioProyecto from "../components/FormularioPregunta";
import Tematicas from "../components/Tematicas";
const CrearPreguntasCompanros  = () => {
  const {preguntas}=usePreguntas();

 
    return (
      <>

        <h1 className="text-4xl font-black">crear preguntas compañeros </h1>
        <div className="bg-white shadow mt-10 rounded-lg">
        <Tematicas/>

        <FormularioProyecto/>
        <h1 className="text-4xl font-black">Proyectos</h1>
      <div className="bg-white shadow mt-10 rounded-lg">lll
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
  
  export default CrearPreguntasCompanros;