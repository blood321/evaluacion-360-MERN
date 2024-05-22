import React, { useState } from "react";
import { FaTrash, FaPencilAlt, FaLocationArrow } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import GraficaColumn from "./GraficaColum";
import GraficaPie from "./GraficaPie";

const PrevisualizarEncu = ({ onShowActividadModal }) => {
  const [showGraph, setShowGraph] = useState(false);

  const handleToggleGraph = () => {
    setShowGraph((prevState) => !prevState);
  };

  return (
    <div className="relative p-7 overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right dark:text-black font-semibold">
        <thead className="text-xs text-white uppercase bg-Principal_1 dark:bg-Secundario_1 dark:text-white">
          <tr>
            <th scope="col" className="p-4">
              <button onClick={() => window.location.reload()}>
                <FiRefreshCcw title="Refrescar" />
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Equipo ejecutor
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b dark:bg-white dark:border-gray-700 hover:bg-Principal_1 dark:hover:bg-gray-300 font-semibold">
            <td className="w-4 p-4"></td>
            <th
              scope="row"
              className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-Principal_1"
            >
              Encuesta Nombre
            </th>
            <td className="px-6 py-4">Fecha Creado</td>
            <td className="flex justify-between px-5 py-4">
              <a
                onClick={handleToggleGraph}
                href="#"
                className="font-medium dark:text-black hover:underline ms-3"
              >
                <IoEyeSharp title="Ver Actividad" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {showGraph && (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
          <div className="border border-white rounded-lg p-7 bg-gray-500 bg-opacity-40 shadow-lg">
            <div className="flex flex-row">
              <GraficaColumn />
            </div>
          </div>
          <div className="border border-white rounded-lg p-7 bg-gray-500 bg-opacity-40 shadow-lg">
            <div className="flex flex-row">
              <GraficaPie />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrevisualizarEncu;
