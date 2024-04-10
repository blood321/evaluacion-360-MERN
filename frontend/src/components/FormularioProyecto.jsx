import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useEncuestas from "../hooks/useEncuesta";
import { useLocation } from "react-router-dom";
import Alerta from "./Alerta";
import ModalConfirmar from "./ModalConfirmacion";

const FormularioProyecto = ({ preguntas }) => {
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [encuestado, setEncuestado] = useState(""); // Estado para guardar el valor de 'encuestado'

  // Utiliza useLocation para obtener la ruta actual
  const location = useLocation();


  // Establece 'encuestado' basado en la ruta actual
  useEffect(() => {
    if (location.pathname === "/inicio-admin/Crear-encuestas-aprendices") {
      setEncuestado("Aprendiz");
    } 
     if (location.pathname === "/inicio-admin/Crear-encuestas-companeros") {
      setEncuestado("Compañeros");
    }
    if (location.pathname === "/inicio-admin/Crear-encuestas-jefes") {
      setEncuestado("jefes");
    }
    
  }, [location]);
  

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

    if ([nombre, descripcion, preguntas].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    // Pasar los datos hacia el provider
    await submitEncuesta({ id, nombre, descripcion, preguntas, encuestado });

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
                    value={id ? 'Actualizar Proyecto' : 'Crear Encuesta'}
                    className="bg-gradient-to-r from-Principal_1 to-Principal_2 w-full p-3 capitalize font-bold text-white rounded cursor-pointer "
                />
            </form>
            {/* Modal */}
            {mostrarModal && <ModalConfirmar onClose={() => setMostrarModal(false)} />}
        </>
  )
  

};

export default FormularioProyecto;
