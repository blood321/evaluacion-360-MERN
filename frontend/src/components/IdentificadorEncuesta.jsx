import useAuth from "../hooks/useAuth";

const Identificador = () => {
  const { auth } = useAuth();
  return (
    <aside
      className="
        flex 
        flex-col 
        p-2
        h-max  
        w-[380px] 
        bg-gray-200 
        border-Principal_1 
        border-solid 
        border-[3.442px] 
        rounded-[30.695px] 
      "
    >
      <div className="text-xl font-bold">
        <div className="flex items-center justify-between">
          <span>ID 360</span>
          <span>02340235</span>
        </div>
      </div>

      <div className="text-xl font-bold">
        <div className="flex items-center justify-between">
          <span>Nombre</span>
          <span>pepito perez</span>
        </div>
      </div>

      <div className="text-xl font-bold">
        <div className="flex items-center justify-between">
          <span>Total Preguntas</span>
          <span>3</span>
        </div>
      </div>
      <div className="text-xl font-bold">
        <div className="flex items-center justify-between">
          <span>Tiempo</span>
          <span>20° nublado xd</span>
        </div>
      </div>
    </aside>
  );
};

export default Identificador;
