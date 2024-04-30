import React, { useState } from "react";
import usePreguntas from "../hooks/usePreguntas";
const PreguntaEditable = ({ id, pregunta2 }) => {
  const [editando, setEditando] = useState(false);
  const [pregunta, setPregunta] = useState(pregunta2);
  const { submitPregunta, eliminarPregunta } = usePreguntas();

  const handleChange = (e) => {
    setPregunta(e.target.value);
  };

  // onGuardar(pregunta)
  // setEditando(false)

  const handleEliminar = () => {
    eliminarPregunta(id);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditando(false);
    if ([pregunta2].includes("")) {
      setMostrarAlerta({
        msg: "Todos los campos son necesarios ",
        error: true,
      });
      return;
    }
    // Pasar los datos hacia el provider
    await submitPregunta({ id, pregunta });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-3 py-1 animate-fade-down animate-duration-[1000ms] ">
        {editando ? (
          <div className="flex items-center  ">
            <input
              className="p-1 mr-2 rounded-md flex-1 w-full  text-[19px]"
              type="text"
              value={pregunta}
              onChange={handleChange}
            />
            <button
                class="middle none center mr-3 rounded-lg border border-Principal_1 py-3 px-6 font-sans text-xs font-bold uppercase text-Principal_1 transition-all hover:opacity-75 focus:ring focus:ring-Principal_1 shadow-md shadow-green-500/20  hover:shadow-lg hover:shadow-green-500/40  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={handleSubmit}
            >
              Guardar
            </button>
            <button
                class="middle none center mr-3 rounded-lg border border-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-blue-600 transition-all hover:opacity-75 focus:ring focus:ring-blue-600 shadow-md shadow-blue-500/20  hover:shadow-lg hover:shadow-blue-500/40  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={() => setEditando(false)}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="py-2">{pregunta2}</p>
            <div className="flex">
              <button
                class="middle none center mr-3 rounded-lg border border-Principal_1 py-3 px-6 font-sans text-xs font-bold uppercase text-Principal_1 transition-all hover:opacity-75 focus:ring focus:ring-Principal_1 shadow-md shadow-green-500/20  hover:shadow-lg hover:shadow-green-500/40  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={() => setEditando(true)}
              >
                Editar
              </button>
              <button
                class="middle none center mr-3 rounded-lg border border-red-600 py-3 px-6 font-sans text-xs font-bold uppercase text-red-600 transition-all hover:opacity-75 focus:ring focus:ring-red-600 shadow-md shadow-red-500/20  hover:shadow-lg hover:shadow-red-500/40  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={handleEliminar}
              >
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default PreguntaEditable;
