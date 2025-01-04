import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const RespuestasContext = createContext();

const RespuestasProvider = ({ children }) => {
  const [respuestas, setRespuestas] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [proyecto, setProyecto] = useState({});
  const [cargando, setCargando] = useState(false);


  const navigate = useNavigate();

    const obtenerRespuestas = async () => {      try { 

        const { data } = await clienteAxios(
          `/detalleEncuesta/responde/661c3536e01e0a1bfe605f65`,
        );
        const arrayResultante = Object.entries(data).flatMap(([pregunta, instructores]) =>
          instructores.map((instructor) => ({ ...instructor, pregunta }))
        );
        


      if (localStorage.getItem("respuestas")) {
        console.log("ya existe")
      }else{
        localStorage.setItem("respuestas", JSON.stringify(data));
        } }catch (error) {
      

        console.log(error);
      }
    };
    obtenerRespuestas();

  const editarRespuesta = async (proyecto) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.put(
        `/proyectos/${proyecto.id}`,
        proyecto,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RespuestasContext.Provider
      value={{
        editarRespuesta,
        respuestas
      }}
    >
      {children}
    </RespuestasContext.Provider>
  );
};
export { RespuestasProvider };

export default RespuestasContext;
