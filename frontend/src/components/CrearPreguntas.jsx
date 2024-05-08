import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePreguntas from "../hooks/usePreguntas";

const CrearPreguntas = ({ tematica }) => {
  const [pregunta, setPregunta] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const { submitPregunta } = usePreguntas();
  const [encuestado, setEncuestado] = useState(""); 

  const location = useLocation();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pregunta.trim()) {
      setMostrarAlerta(true);
      return;
    }

    await submitPregunta({ pregunta, tematica, encuestado });

    setPregunta("");
    setMostrarAlerta(false);
  };

  return (
    <form className="bg-white bg-opacity-20 rounded-md px-8 w-[400px] md:w-[480px]" onSubmit={handleSubmit}>
      <div className="p-3">
        <h2 className="font-extrabold text-[30px] text-Principal_2 mb-2">Crear Preguntas</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Escribe tu pregunta aquí"
            className="border-2 border-gray-300 p-2 mr-2 rounded-md w-[300px]"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
          />
          <button className="bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded">
            Crear
          </button>
        </div>
        {mostrarAlerta && (
          <p className="text-red-500 mt-2 font-extrabold">Por favor, escribe una pregunta antes de crearla.</p>
        )}
      </div>
    </form>
  );
};

export default CrearPreguntas;
