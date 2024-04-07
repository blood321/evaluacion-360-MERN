import PrevisualizarEncu from "../components/PrevisualizarEncu";
import Tematicas from "../components/Tematicas";
import useEncuestas from "../hooks/useEncuesta";

const ListarEncuestas = () => {
  const { encuesta } = useEncuestas();
  console.log(
    encuesta + ""
  );
  return (
    <>
     <div className="md:flex md:justify-between mt-2">
            <p className="px-12 pr-5 font-semibold text-[19px] text-Secundario_2/[0.7]">
              Puedes Previsualizar y editar tu{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-Principal_1 to-Principal_2">
                encuenta antes de ser enviadas
              </span>
            </p>
          </div>
      {encuesta.length ? (
        encuesta.map((tematica) => (
          <div className=" overflow-auto custom-scrollbar px-12 mt-[20px] flex flex-row items-center ">
          <PrevisualizarEncu key={tematica._id} nombre={tematica.nombre} />
          
        </div>
        ))
      ) : (
        <option disabled>No hay temáticas disponibles</option>
      )}    
    </>
  );
};
export default ListarEncuestas;
