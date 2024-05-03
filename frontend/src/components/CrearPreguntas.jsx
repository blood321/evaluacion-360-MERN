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
    console.log(pregunta)
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
        await submitPregunta({ pregunta, tematica,encuestado});
    
        setPregunta("");
      };
    
    return (
        <form               className="bg-white/[0.2] rounded-md  px-8 w-[400px] md:w-[480px]"
        onSubmit={handleSubmit}
        >

        <div className="px-auto p-3">
            <h2 className="font-extrabold text-[30px] text-Principal_2/[0.9] mb-2">Crear Preguntas</h2>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Escribe tu pregunta aquí"
                    className="border-2 border-gray-300 p-2 mr-2 rounded-md w-[500px]"
                    value={pregunta}
                    onChange={e => setPregunta(e.target.value)}
                />
                <button
                    className="bg-gradient-to-r from-Principal_1 to-Principal_2 text-white font-bold py-2 px-4 rounded"
                >
                    Crear
                </button>
            </div>
            {mostrarAlerta && (
                <p className="text-red-500 mt-2 font-extrabold">Por favor, escribe una pregunta antes de crearla.</p>
            )}

        </div>
        {mostrarAlerta && (
          <p className="text-red-500 mt-2 font-extrabold">
            Por favor, escribe una pregunta antes de crearla.
          </p>
        )}
    </form>
  );
};

export default CrearPreguntas;
