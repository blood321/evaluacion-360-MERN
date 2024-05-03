import React, { useState } from "react";
import GraficaColumn from "./GraficaColum";

const FiltroInstructores = () => {
  const [showGraph, setShowGraph] = useState(false); // Add state to control the visibility of the graph

  const handleButtonClick = () => {
    setShowGraph(true); // Change the state to true when the button is clicked
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="  flex  font-Roboto  w-[500px] h-[560px]">
          <div className="">
            <table className="table text-Principal_3 border-separate text-sm">
              <thead className=" text-Secundario_1  ">
                <tr>
                  <th className="p-3">Nombre</th>
                  <th className="p-3 text-left">Equipo Ejecutor</th>
                  <th className="p-3 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800">
                  <td className="p-3">Felix</td>
                  <td className="p-3">SISTEMAS</td>
                  <td className="p-3">
                    <div className="flex">
                      <button className="flex" type="button" title="Ver Resultados" onClick={handleButtonClick}>
                        <a
                          href="#"
                          className="text-Secundario_3 hover:text-gray-100 mr-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                          </svg>
                        </a>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <style>
          {`
            .table {
              border-spacing: 0 3px;
            }

            i {
              font-size: 1rem !important;
            }

            .table tr {
              border-radius: 50px;
            }

            tr td:nth-child(n+3),
            tr th:nth-child(n+3) {
              border-radius: 0 3rem 3rem 0;
            }

            tr td:nth-child(1),
            tr th:nth-child(1) {
              border-radius: 3rem 0 0 3rem;
            }
          `}
        </style>
      </div>
      <div className="w-1/2">
        {showGraph && <GraficaColumn />}
      </div>
    </div>
  );
};

export default FiltroInstructores;