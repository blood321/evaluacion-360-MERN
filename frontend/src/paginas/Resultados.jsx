import FiltroInstructores from "../components/FiltroInstructores";
import GraficaColumInstructor from "../components/GraficaColumInstructor";
const Resultados = () => {
  return (
    <>
      <div className="flex flex-row items-center ">
        <div className=" overflow-auto custom-scrollbar px-12 mt-[20px] flex items-center">
          <FiltroInstructores />
        </div>
        <div className="flex justify-center items-center w-[430px] h-[300px] border rounded-lg border-red-700 mt-12 ">
          <GraficaColumInstructor />
        </div>
      </div>
    </>
  );
};

export default Resultados;
