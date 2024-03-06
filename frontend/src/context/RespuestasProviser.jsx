import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const RespuestasContext = createContext();

const RespuestasProvider = ({ children }) => {
  const [respuestas, setRespuestas] = useState([]);
  const [pregunta ,setPreguntas]=useState([])
  const [alerta, setAlerta] = useState({});
 

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerRespuestas = async () => {
      try {
     
        const { data } = await clienteAxios("/detalleEncuesta/responde-encuesta");
        setRespuestas(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerRespuestas();
  }, []);

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };
  const editarRespuesta = async (proyecto) => {
    try {
    
      const { data } = await clienteAxios.put(
        `/proyectos/${proyecto.id}`,
        proyecto,
        config
      );

      // Sincronizar el state
      const proyectosActualizados = respuestas.map((proyectoState) =>
        proyectoState._id === data._id ? data : proyectoState
      );
      setRespuestas(proyectosActualizados);

      // Mostrar la Alerta de proyecto actualizado
      setAlerta({
        msg: "Proyecto Actualizado correctamente",
        error: false,
      });

      setTimeout(() => {
        setAlerta({});
        navigate("/proyectos");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <RespuestasContext.Provider
      value={{
        respuestas,
        mostrarAlerta,
        alerta,
        pregunta
        
      }}
    >
      {children}
    </RespuestasContext.Provider>
  );
};
export { RespuestasProvider };

export default RespuestasContext;
