import FiltroInstructores from "../components/FiltroInstructores";
const Resultados = () => {
  return (
    <>
      <div className="flex flex-row items-center ">
        <div className=" overflow-auto custom-scrollbar px-12 mt-[20px] flex items-center">
          <FiltroInstructores />
        </div>
       
      </div>
    </>
  );
};

export default Resultados;
