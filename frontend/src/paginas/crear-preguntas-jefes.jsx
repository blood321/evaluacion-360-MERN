import usePreguntas from "../hooks/usePreguntas";
import PreviewPreguntas from "../components/previewPreguntas";
import FormularioProyecto from "../components/FormularioPregunta";

const CrearPreguntasJefes  = () => {
    const {preguntas}=usePreguntas();

 
    return (
      <>

        <h1 className="text-4xl font-black">crear preguntas Jefes </h1>
        <div className="bg-white shadow mt-10 rounded-lg">
         
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
  
  export default CrearPreguntasJefes;