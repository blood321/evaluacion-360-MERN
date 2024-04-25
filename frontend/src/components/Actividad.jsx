import React, { useState, useEffect } from "react";

function Actividad({ onClose }) {
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState([]);

  // Función para manejar el evento de cancelación
  const handleCancel = () => {
    onClose();
    setShowModal(false);
  };

  return (
    <div
      className="modal"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999",
      }}
    >
        <div className="mx-auto w-full max-w-2xl rounded-xl border bg-white shadow-lg">
          <header className="border-b border-gray-100 px-5 py-2">
            <div className="font-semibold text-gray-800">Datos de la encuesta</div>
          </header>

          <div className="overflow-x-auto p-3">
            <table className="w-full table-auto">
              <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                <tr>
                  <th className="p-2">
                    <div className="text-left font-semibold">
                      fecha de lanzamiento
                    </div>
                  </th>

                  <th className="p-2">
                    <div className="text-left font-semibold">
                      Cantidad de respuestas
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm">
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">fecha uno</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left font-medium text-green-500">
                      5 respuestas
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">fecha uno</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left font-medium text-green-500">
                      5 respuestas
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">fecha uno</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left font-medium text-green-500">
                      5 respuestas
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">fecha uno</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left font-medium text-green-500">
                      5 respuestas
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">fecha uno</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left font-medium text-green-500">
                      5 respuestas
                    </div>
                  </td>
                </tr>
                <div className="mt-5 text-right md:space-x-3">
                  <button
                    className="mb-2 flex md:mb-0 bg-gray-300 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-black rounded-full hover:shadow-lg hover:bg-gray-400"
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Actividad;
