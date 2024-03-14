import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";
import { Link } from "react-router-dom";

const FormularioProyecto = () => {
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [cliente, setCliente] = useState("");
  const [tipoPregunta, setTipoPregunta] = useState("");

  const params = useParams();
  const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyectos();

  useEffect(() => {
    if (params.id) {
      setId(proyecto._id);
      setNombre(proyecto.nombre);
      setDescripcion(proyecto.descripcion);
      setFechaEntrega(proyecto.fechaEntrega?.split("T")[0]);
      setCliente(proyecto.cliente);
      setTipoPregunta(proyecto.tipoPregunta);
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, descripcion, fechaEntrega, cliente, tipoPregunta].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    // Pasar los datos hacia el provider
    await submitProyecto({
      id,
      nombre,
      descripcion,
      fechaEntrega,
      cliente,
      tipoPregunta,
    });

    setId(null);
    setNombre("");
    setDescripcion("");
    setFechaEntrega("");
    setCliente("");
    setTipoPregunta("");
  };

  const { msg } = alerta;

  return (
    <form
      className="border-4 my-2 border-Secundario_2 py-5 px-5 md:max-w-2xl mx-auto rounded-3xl "
      onSubmit={handleSubmit}
    >
      {msg && <Alerta alerta={alerta} />}
      <div className="mb-5">
        <label
          className="text-gray-700 capitalize font-bold text-md"
          htmlFor="descripcion"
        >
          Descripción de la pregunta
        </label>
        <textarea
          id="descripcion"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripción de la pregunta"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
      </div>
      <div className="border-t-2 border-Secundario_2 w-full h-1 mb-5"></div>
      <div className="flex flex-row mb-7">
        <div className="flex flex-col md:flex-row justify-between mr-3">
          <label
            className="text-gray-700 capitalize font-bold text-md"
            htmlFor="tipoPregunta"
          >
            Tipo de pregunta
          </label>
          <div className="flex flex-col md:flex-row items-center w-full md:w-[230px] my-2 md:rounded-[33.695px] ">
            <Link
              to="#"
              className="bg-Principal_3 w-full md:w-9/12 p-1 text-black capitalize font-bold block mt-1 text-center rounded-full border border-Secundario_2 hover:bg-Principal_1 hover:text-white hover:border-Principal_1 hover:border-2 md:mx-1"
            >
              {tipoPregunta === "abierta" ? "Abierta" : "Selecciona"}
            </Link>
            {tipoPregunta !== "abierta" && (
              <>
                <Link
                  to="#"
                  className="bg-Principal_3 w-full md:w-9/12 p-1 text-black capitalize font-bold block mt-1 text-center rounded-full border border-Secundario_2 hover:bg-Principal_1 hover:text-white hover:border-Principal_1 hover:border-2 md:mx-1"
                >
                  Escala
                </Link>
                <Link
                  to="#"
                  className="bg-Principal_3
                  w-full md:w-9/12 p-1 text-black capitalize font-bold block mt-1 text-center rounded-full border border-Secundario_2 hover:bg-Principal_1 hover:text-white hover:border-Principal_1 hover:border-2 md:mx-1"
                  >
                    Multiple
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="font-bold w-full mt-4 md:w-80 ">
            <div className="flex flex-col">
              <div className="flex items-center ">
                <button
                  type="button"
                  className="rounded-full w-6 h-6 mr-2 mt-1 p-1 focus:ring-2 focus:ring-Principal_1 bg-gray-300"
                ></button>
                <span className="mr-4">Mucho</span>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="rounded-full w-6 h-6 mr-2 mt-1 p-1 focus:ring-2 focus:ring-Principal_1 bg-gray-300"
                ></button>
                <span className="">Poco</span>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="rounded-full w-6 h-6 mr-2 mt-1 p-1 focus:ring-2 focus:ring-Principal_1 bg-gray-300"
                ></button>
                <span className="">Muy poco</span>
              </div>
              <button type="button" title="Agregar nuevo tipo de pregunta ">
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex items-end"
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
              d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
            />
          </svg>
        </button>
      </form>
    );
  };
  
  export default FormularioProyecto;
  
  