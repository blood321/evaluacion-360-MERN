import React, { useState, useEffect } from "react";
import usePreguntas from "../hooks/usePreguntas";
import SelectMultiple from "./SelectMultiple";
import Tematicas from "./Tematicas";
function Editar({ onClose }) {
  // Obtener las preguntas usando el hook personalizado usePreguntas

  const { preguntas } = usePreguntas();

  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(true);

  // Estado para almacenar las temáticas disponibles

  // Estado para almacenar la temática seleccionada
  const [tematicaSeleccionada, setTematicaSeleccionada] = useState("");

  // Estado para almacenar las preguntas seleccionadas
  const [preguntasSeleccionadas, setPreguntasSeleccionadas] = useState([]);

  // Estado para manejar errores de carga de temáticas
  const [error, setError] = useState(null);

  // Estado para almacenar las preguntas filtradas por temática
  const [preguntasFiltradasPorTematica, setPreguntasFiltradasPorTematica] = useState([]);

  
  // Función para manejar el evento de guardado
  const handleSave = () => {
    // Cerrar el modal y realizar otras acciones de guardado
    onClose();
    setShowModal(false);
  };

  // Función para manejar el evento de cancelación
  const handleCancel = () => {
    onClose();
    setShowModal(false);
  };

  // Función para manejar el cambio de la temática seleccionada
  const handleTematicaChange = (event) => {
    setTematicaSeleccionada(event.target.value);
  };

  // Función para manejar el cambio de las preguntas seleccionadas
  const handlePreguntasChange = (event) => {
    const selectedPreguntas = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setPreguntasSeleccionadas(selectedPreguntas);
  };const handleTematicaSeleccionada = tematica => {
    setTematicaSeleccionada(tematica)
}


  // Efecto para actualizar las preguntas filtradas cuando cambia la temática seleccionada
  useEffect(() => {
    // Filtrar las preguntas según la temática seleccionada
    const preguntasFiltradas = preguntas.filter((pregunta) => {
      return pregunta.tematica === tematicaSeleccionada;
    });
    // Actualizar el estado con las preguntas filtradas
    setPreguntasFiltradasPorTematica(preguntasFiltradas);
  }, [tematicaSeleccionada, preguntas]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-50">
            <div className="grid gap-8 grid-cols-1">
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row items-center">
                  <h2 className="font-semibold text-lg mr-auto">
                    Editar Encuesta
                  </h2>
                  <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>

                <div className="mt-5">
                  <div className="form">
                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                      <div className="mb-3 space-y-2 w-full text-xs">
                        <label className="font-semibold text-gray-600 py-2">
                          Renombrar Encuesta
                        </label>
                        <input
                          placeholder="nombre actual"
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                        />
                      </div>
                      <div className="mb-3 space-y-2 w-full text-xs">
                        <label className="font-semibold text-gray-600 py-2">
                          Temáticas
                        </label>
                        <select
                          className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                          required="required"
                          value={tematicaSeleccionada}
                          onChange={handleTematicaChange}
                        >
                          <option value="">Selecciona Temática</option>
                          {/* Mapear las temáticas disponibles */}
                          <Tematicas tematica={handleTematicaSeleccionada} />
                    </select>
                      </div>
                    </div>

                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Preguntas
                      </label>
                      <SelectMultiple
                        preguntas={preguntasFiltradasPorTematica}
                        value={preguntasSeleccionadas}
                        onChange={handlePreguntasChange}
                      />
                      <p
                        className="text-sm text-red-500 hidden mt-3"
                        id="error"
                      >
                        Please fill out this field.
                      </p>
                    </div>

                    <div className="flex-auto w-full mb-1 text-xs space-y-2">
                      <label className="font-semibold text-gray-600 py-2">
                        Descripción
                      </label>
                      <textarea
                        required=""
                        name="message"
                        id=""
                        className="min-h-[100px] max-h-[300px] h-20 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                        placeholder="Descripcion Actual"
                        spellCheck="false"
                      ></textarea>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Fecha Limite
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="datetime-local"
                      />
                    </div>

                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button
                        onClick={handleCancel}
                        className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={handleSave}
                        className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Editar;
