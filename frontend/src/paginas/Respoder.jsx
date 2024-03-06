import { useState, useEffect } from "react";
import { NavBarUser } from "../components/NavBarUser";
import Modal from "../components/Modal"; // Importa tu componente Modal aquí
import useRespuestas from "../hooks/useRespuestas";
import Respuestas from "../components/Respuestas";
import Preguntas from "../components/Preguntas";
import preguntas from "../../../backend/models/preguntas";
const Responder = () => {
  const { respuestas } = useRespuestas();
  const nombreEncuesta = respuestas.map(
    (respuesta) => respuesta.encuesta.nombre
  );
  const soloMostrarUno = [...new Set(nombreEncuesta)];
  const [id, setId] = useState("");
  const addmensaje = (mensaje) => {
    setId(mensaje);
    console.log(mensaje);
  };
  console.log(id);
  return (
    <>
      <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-5 md:px-10 md:w-full md:mx-auto md:mt-4">
        <div className="bg-logoSena w-10 h-10 bg-cover"></div>
        <NavBarUser />
      </header>
      <div className="mx-auto mt-20 md:mt-20 p-3 px-5 md:flex">
        <section className="mt-4 mx-auto w-full rounded-md shadow-lg shadow-green-800 overflow-hidden md:grid md:grid-cols-3 md:grid-rows-[450px] md:w-auto md:h-[450px] md:rounded-3xl md:mx-auto">
          <div className="bg-gradient-to-r from-Principal_1 to-Principal_2 h-[200px] px-10 text-center rounded-b-3xl md:w-[350px] md:h-full md:rounded-3xl md:mb-6 flex flex-col md:flex-col justify-center items-center md:grid-row">
            <h2 className="text-Principal_3 text-3xl font-bold items-center md:mb-2">
              {soloMostrarUno}
            </h2>
            <div className="mt-4 md:mt-20">
              <p className="text-Principal_3 text-2xl items-center mb-6">
                Tiempo restante: 10 minutos
              </p>
            </div>
          </div>
          <div className="mx-auto md:w-[370px] md:h-full md:flex md:justify-center md:items-center flex flex-col">
            <div className="mb-10">
              <Preguntas addmensaje={addmensaje} />
            </div>
            <button
              className={`py-2 px-4  mx-auto bg-gray-300 text-gray-600 rounded-md flex-col 
                                
                            `}
            >
              Enviar Encuesta
            </button>
          </div>

          <p>preguntaID de la actual: {id}</p>

          <div className="">
            <div className="mx-auto md:w-full h-[250px] md:h-full mb-9 overflow-y-auto flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <Respuestas />
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="text-center  text-Principal_1 p-3 w-full mt-5 md:bg-Principal_1 md:text-Principal_3 md:fixed bottom-0 inset-x-0">
        &copy; 2024 SENA Centro Agropecuario
      </footer>
    </>
  );
};

export default Responder;
