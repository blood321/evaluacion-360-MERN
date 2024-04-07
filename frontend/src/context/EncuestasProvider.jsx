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
        const { data } = await clienteAxios("/encuesta/lista");
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

  const submitEncuesta = async (encuesta) => {
    console.log("esto en escuesta Provider" + encuesta);
    if (encuesta.id) {
      await editarEncuesta(encuesta);
    } else {
      await nuevaEncuesta(encuesta);
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

  const nuevaEncuesta = async (encuesta) => {
    try {
      const { data } = await clienteAxios.post("/encuesta", encuesta);
      setEncuesta([...encuesta, data]);
      setAlerta({
        msg: "Proyecto creado correctamente",
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

  const eliminarProyecto = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.delete(`/proyectos/${id}`, config);
      // Sincronizar el State
      const proyectosActualizados = proyectos.filter(
        (proyectoState) => proyectoState._id !== id
      );
      setProyectos(proyectosActualizados);
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
        navigate("/proyectos");
      }, 1500);
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
        eliminarProyecto,
      }}
    >
      {children}
    </EncuestasContext.Provider>
  );
};

export { EncuestasProvider };
export default EncuestasContext;
