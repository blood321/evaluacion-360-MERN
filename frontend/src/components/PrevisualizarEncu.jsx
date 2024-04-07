import React, { useState } from "react";
import Eliminar from "./Eliminar"; // Importa el componente Eliminar
import Enviar from "./Enviar";
import clienteAxios from '../config/clienteAxios';


const PrevisualizarEncu = (nombre) => {
  const [mostrarEliminar, setMostrarEliminar] = useState(false); // Estado para controlar la visibilidad del modal de eliminar
  const [mostrarEnviar, setMostrarEnviar] = useState(false); // Estado para controlar la visibilidad del modal de enviar

  const mostrarModalEliminar = () => {
    setMostrarEliminar(true); // Función para mostrar el modal de eliminar
  };

  const mostrarModalEnviar = () => {
    setMostrarEnviar(true); // Función para mostrar el modal de enviar
  };
  return (
    <div>
      <div className="  flex  font-Roboto  w-[500px] h-[560px]">
        
          <div className="">
            <table className="table text-Principal_3 border-separate text-sm">
                <thead className=" text-Secundario_1  ">
                  <tr>
                    <th className="p-3">ID 360</th>
                    <th className="p-3 text-left">Nombre</th>
                    <th className="p-3 text-left">Fecha</th>
                    <th className="p-3 text-left">360</th>
                    <th className="p-3 text-left"></th>
                  </tr>
                </thead>

              <tbody>
                <tr className="bg-gray-800">
                  <td className="p-3">123456</td>
                  <td className="p-3">{nombre.nombre}</td>
                  <td className="p-3">10/12/2020</td>
                  <td className="p-3">Aprendices</td>
                  <td className="p-3">
                    <div className="flex">
                      <button className="flex" type="button" title="Enviar">
                        <a
                          href="#"
                          className="text-Secundario_3 hover:text-gray-100 mr-1"
                          onClick={mostrarModalEnviar} // Agrega el manejador de eventos al botón de eliminar

                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                          </svg>
                        </a>
                      </button>
                      <button className="flex" type="button" title="Editar">
                        <a
                          href="#"
                          className="text-Secundario_3 hover:text-gray-100 mx-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </a>
                      </button>
                      <button className="flex" type="button" title="Eliminar">
                        <a
                          href="#"
                          className="text-Secundario_3 hover:text-gray-100 ml-1"
                          onClick={mostrarModalEliminar} // Agrega el manejador de eventos al botón de eliminar
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
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
      {mostrarEliminar && (
        <Eliminar onClose={() => setMostrarEliminar(false)} />
      )}
      {mostrarEnviar &&(
        <Enviar onClose={() => setMostrarEnviar(false)}/>
      )}
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
          tr td:nth-child(n+5),
          tr th:nth-child(n+5) {
            border-radius: 0 2rem 2rem 0;
          }
          tr td:nth-child(1),
          tr th:nth-child(1) {
            border-radius: 3rem 0 0 3rem;
          }
        `}
      </style>
    </div>
  );
};
export default PrevisualizarEncu;