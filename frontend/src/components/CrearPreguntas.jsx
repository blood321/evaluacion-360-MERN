import React, { useEffect, useState } from "react";
import usePreguntas from "../hooks/usePreguntas";
import { useLocation } from "react-router-dom";

const CrearPreguntas = ({ tematica }) => {
  const [pregunta, setPregunta] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const { submitPregunta } = usePreguntas();
  const [encuestado, setEncuestado] = useState(""); // Estado para guardar el valor de 'encuestado'

  // Utiliza useLocation para obtener la ruta actual
  const location = useLocation();

  // Establece 'encuestado' basado en la ruta actual
  useEffect(() => {
    if (location.pathname === "/inicio-admin/Crear-preguntas-aprendices") {
      setEncuestado("Aprendiz");
    }
    if (location.pathname === "/inicio-admin/Crear-preguntas-companeros") {
      setEncuestado("Compañeros");
    }
    if (location.pathname === "/inicio-admin/Crear-preguntas-jefes") {
      setEncuestado("Jefes");
    }
  }, [location]);
  console.log(pregunta);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([pregunta].includes("")) {
      setMostrarAlerta({
        msg: "Todos los campos son necesarios ",
        error: true,
      });
      return;
    }
    // Pasar los datos hacia el provider
    await submitPregunta({ pregunta, tematica, encuestado });

    setPregunta("");
  };

  return (
    <form
      className="bg-white/[0.2] rounded-md px-10 w-[400px] md:w-[480px]"
      onSubmit={handleSubmit}
    >
      <div className="px-auto">
        <h2 className="font-extrabold text-[25px] text-Principal_2/[0.9]">
          Crear Preguntas
        </h2>
        <div className="flex p-3 items-center">
          <input
            type="text"
            placeholder="Escribe tu pregunta aquí"
            className="border-2 border-gray-300 p-2 mr-2 rounded-md w-[500px]"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
          />
          <button class="middle none center mr-3 rounded-lg bg-gradient-to-tr from-Principal_1 to-Principal_2 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-Principal_1/20 transition-all hover:shadow-lg hover:shadow-Principal_1/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Crear
          </button>
        </div>
        {mostrarAlerta && (
          <p className="text-red-500 mt-2 font-extrabold">
            Por favor, escribe una pregunta antes de crearla.
          </p>
        )}
      </div>
    </form>
  );
};

export default CrearPreguntas;
