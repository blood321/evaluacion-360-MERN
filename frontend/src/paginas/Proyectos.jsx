import useProyectos from "../hooks/useProyectos";
import PreviewProyecto from "../components/PreviewProyecto";

const Proyectos = () => {
  const { proyectos } = useProyectos();
  return (
    <>
    
      
      <div className="bg-white shadow mt-10 border-2 border-Secundario_2 rounded-lg">
        {proyectos.length ? 
          proyectos.map(proyecto => (
            <PreviewProyecto key={proyecto._id} proyecto={proyecto} />
          ))
         : (
          
          <p className="text-center text-gray-600  uppercase p-5">
            No hay proyectos
          </p>
          
        )}
      </div>
      
    </>
  );
};

export default Proyectos;
