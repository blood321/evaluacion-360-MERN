import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";
import ModalConfirmar from "./ModalConfirmacion";
import useEncuestas from "../hooks/useEncuesta";

const FormularioProyecto = ({ preguntas }) => {
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("hola");
  const [descripcion, setDescripcion] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  console.log("este es el contenido a guardar"+nombre)
  console.log("este es el contenido a guardar"+descripcion)
  console.log("este es el contenido a guardar"+fechaEntrega)
console.log(preguntas)
  
  const params = useParams();
  const { mostrarAlerta, alerta, submitEncuesta, encuesta } = useEncuestas();

  useEffect(() => {
    if (params.id) {
      setId(encuesta._id);
      setNombre(encuesta.nombre);
      setDescripcion(encuesta.descripcion);
      setFechaEntrega(encuesta.fechaEntrega?.split("T")[0]);
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, descripcion,preguntas].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    // Pasar los datos hacia el provider
    await submitEncuesta({ id, nombre, descripcion,preguntas });

    setId(null);
    setNombre("");
    setDescripcion("");
    setFechaEntrega("");
    setMostrarModal(true); // Mostrar el modal al enviar el formulario
  };

  const { msg } = alerta;
  return (
    <>
      <form
        className="bg-white/[0.2] rounded-md  px-10 w-[400px] md:w-[480px]"
        onSubmit={handleSubmit}
      >
        <div className="">
          <label
            className="text-gray-700 capitalize font-bold text-md"
            htmlFor="nombre"
          >
            Nombre Encuesta
          </label>
          <input
            id="nombre"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre Encuesta"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="text-gray-700 capitalize font-bold text-md"
            htmlFor="descripcion"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            className="border-2 w-full p-2 mt-2
            placeholder-gray-400 rounded-md"
            placeholder="Descripción dela Encuesta"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            className="text-gray-700 capitalize font-bold text-md"
            htmlFor="fecha-entrega"
          >
            Fecha Limite
          </label>
          <input
            id="fecha-entrega"
            type="datetime-local"
            className="border-2 w-full p-2 mt-2
                  placeholder-gray-400 rounded-md"
            value={fechaEntrega}
            onChange={(e) => setFechaEntrega(e.target.value)}
          ></input>
        </div>

        <input
          type="submit"
          value={id ? "Actualizar Proyecto" : "Crear Encuesta"}
          className="bg-gradient-to-r from-Principal_1 to-Principal_2 w-full p-3 capitalize font-bold text-white rounded cursor-pointer "
        />

        {msg && (
          <Alerta
            alerta={alerta}
            className="absolute bottom-0 left-0 right-0"
          />
        )}
      </form>
      {/* Modal */}
      {mostrarModal && (
        <ModalConfirmar onClose={() => setMostrarModal(false)} />
      )}
    </>
  );
};

export default FormularioProyecto;
