import React, { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const EncuestasContext = createContext();

const EncuestasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState({});
  const [cargando, setCargando] = useState(false);
  const [encuesta, setEncuesta] = useState([]);

  useEffect(() => {
    const obtenerPreguntas = async () => {
      try {
        const { data } = await clienteAxios("/encuesta");
        setEncuesta(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPreguntas();
  }, []);

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };

  const submitEncuesta = async (Encuesta) => {
    if (encuesta.id) {
      await editarEncuesta(encuesta);
    } else {
      await nuevaEncuesta(Encuesta);
    }
  };

  const editarEncuesta = async (encuesta) => {
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
        `/encuesta/${encuesta.id}`,
        encuesta,
        config
      );

      // Actualizar el estado de la encuesta
      setEncuesta(data);

      // Mostrar la Alerta de encuesta actualizada
      setAlerta({
        msg: "Encuesta Actualizada correctamente",
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

  const nuevaEncuesta = async (Encuesta) => {
    try {
      const { data } = await clienteAxios.post("/encuesta", Encuesta);
    
      // Actualiza el estado de la encuesta con la nueva encuesta
      setEncuesta([...Encuesta, data]);
    
      setAlerta({
        msg: "Encuesta creada correctamente",
        error: false,
      });
    
      // Actualiza la encuesta en el estado
      const proyectosActualizados = Encuesta.map((proyectoState) =>
        proyectoState._id === data._id ? data : proyectoState
      );
    
      // Actualiza el estado de la encuesta con las encuestas actualizadas
      setEncuesta(proyectosActualizados);
    
    } catch (error) {
      console.log(error);
    }
    
  };

  const obtenerProyecto = async (id) => {
    setCargando(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios(`/proyectos/${id}`, config);
      setProyecto(data);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  const eliminarEncuesta = async (id) => {
    try {
   
      const { data } = await clienteAxios.delete(`/encuesta/${id}`);
      // Sincronizar el State
      const proyectosActualizados = encuesta.filter(
        (proyectoState) => proyectoState._id !== id
      );
      setEncuesta(proyectosActualizados);
      setAlerta({
        msg: data.msg,
        error: false,
      });
 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EncuestasContext.Provider
      value={{
        encuesta,
        mostrarAlerta,
        alerta,
        submitEncuesta,
        obtenerProyecto,
        cargando,
        eliminarEncuesta,
      }}
    >
      {children}
    </EncuestasContext.Provider>
  );
};

export { EncuestasProvider };
export default EncuestasContext;
