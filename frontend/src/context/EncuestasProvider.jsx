import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const PreguntasContext = createContext();

const PreguntasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState({});
  const [proyecto, setProyecto] = useState({});
  const [cargando, setCargando] = useState(false);
  const [preguntas, setPreguntas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerPreguntas = async () => {
      try {
       
        const { data } = await clienteAxios("/pregunta");
        console.log(data)
        setPreguntas(data);
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

  const submitProyecto = async (proyecto) => {
    if (proyecto.id) {
      await editarProyecto(proyecto);
    } else {
      await nuevoProyecto(proyecto);
    }
  };
  const editarProyecto = async (proyecto) => {
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

      // Sincronizar el state
      const proyectosActualizados = proyectos.map((proyectoState) =>
        proyectoState._id === data._id ? data : proyectoState
      );
      setProyectos(proyectosActualizados);

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
  const nuevoProyecto = async (proyecto) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.post("/proyectos", proyecto, config);
      setProyectos([...proyectos, data]);
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
      const proyectosActualizados = proyectos.filter(proyectoState => proyectoState._id !== id)
      setProyectos(proyectosActualizados)
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
    <PreguntasContext.Provider
      value={{
        preguntas,
        mostrarAlerta,
        alerta,
        submitProyecto,
        obtenerProyecto,
        proyecto,
        cargando,
        eliminarProyecto,
      
      }}
    >
      {children}
    </PreguntasContext.Provider>
  );
};
export { PreguntasProvider };

export default PreguntasContext;
