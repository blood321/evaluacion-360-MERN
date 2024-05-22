import React from "react";
import { FaTrash, FaPencilAlt, FaLocationArrow } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import useEncuesta from "../hooks/useEncuesta";

const PrevisualizarEncu = ({
  onShowEnviarModal,
  onShowDeleteModal,
  onShowEditarModal,
  onShowActividadModal,
}) => {
  const { encuesta } = useEncuesta();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right  dark:text-black font-semibold">
        <thead className="text-xs text-white uppercase bg-Principal_1 dark:bg-Secundario_1 dark:text-white">
          <tr>
            <th scope="col" className="p-4">
              <button onClick={() => window.location.reload()}>
                <FiRefreshCcw title="Refrescar"/>
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre de la Encuesta
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha de Creacion
            </th>
            <th scope="col" className="px-6 py-3">
              Dirigido A
            </th>
            <th scope="col" className="px-6 py-3">
              Tematicas
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Total Respuestas
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {encuesta.length ? (
            encuesta.map((encuestas) => (
              <tr
                className=" border-b dark:bg-white dark:border-gray-700 hover:bg-Principal_1 dark:hover:bg-gray-300 font-semibold"
                key={encuesta._id} encuesta={encuestas}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-3"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-Principal_1 "
                >
                  {encuestas.nombre}
                </th>
                <td className="px-6 py-4">{encuestas.fechaCreado}</td>
                <td className="px-6 py-4">{encuestas.encuestado}</td>
                <td className="px-12 py-4">4</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        encuestas.activa ? "bg-green-500" : "bg-red-500"
                      } me-2`}
                    ></div>
                    {encuestas.activa ? "Activa" : "Inactiva"}
                  </div>
                </td>
                <td className="px-16 py-4">0</td>

                <td className="flex justify-between px-5 py-4">
                  <a
                    onClick={() => onShowEnviarModal(encuestas._id)}
                    href="#"
                    className="font-medium text-Principal_1 dark:text-Principal_1 hover:underline pr-3"
                  >
                    <FaLocationArrow title="Activar" />
                  </a>

                  <a
                    onClick={() => onShowEditarModal(encuestas._id)}
                    href="#"
                    className="font-medium text-Secundario_1 dark:text-Secundario_2 hover:underline"
                  >
                    <FaPencilAlt title="Editar"/>
                  </a>

                  <a
                    onClick={() => onShowDeleteModal(encuestas._id)}
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 "
                  >
                    <FaTrash title="Eliminar"/>
                  </a>
                  <a
                    onClick={onShowActividadModal}
                    href="#"
                    className="font-medium  dark:text-blak hover:underline ms-3 "
                  >
                    <IoEyeSharp title="Ver Actividad"/>
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tbody className="text-center text-gray-600 uppercase p-5">
              No hay Encuestas
            </tbody>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PrevisualizarEncu;
