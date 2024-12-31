import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate } from "react-router-dom";

const PreguntasContext = createContext();

const PreguntasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState({});
  const [cargando, setCargando] = useState(false);
  const [preguntas, setPreguntas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerPreguntas = async () => {
      try {
       
        const { data } = await clienteAxios("/pregunta");
        setPreguntas(data)
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

  const submitPregunta = async (pregunta) => {
    if (pregunta.id) {
      await editarPregunta(pregunta);
    } else {
      await nuevaPregunta(pregunta);
    }
  };
  const editarPregunta = async (pregunta) => {
    try {
     
      const { data } = await clienteAxios.put(`/pregunta/${pregunta.id}`,
        pregunta
      );

      // Sincronizar el state
      const proyectosActualizados = preguntas.map((proyectoState) =>
        proyectoState._id === data._id ? data : proyectoState
      );
      setPreguntas(proyectosActualizados);

      // Mostrar la Alerta de proyecto actualizado
      setAlerta({
        msg: "Proyecto Actualizado correctamente",
        error: false,
      });

     
    } catch (error) {
      console.log(error);
    }
  };
  const nuevaPregunta = async (pregunta) => {
    try {
     
      const { data } = await clienteAxios.post("/pregunta", pregunta);
      setPreguntas([...preguntas, data]);
      setAlerta({
        msg: "pregunta creada correctamente",
        error: false,
      });

      
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
  const eliminarPregunta= async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.delete(`/pregunta/${id}`, config);
      // Sincronizar el State
      const proyectosActualizados = preguntas.filter(proyectoState => proyectoState._id !== id)
      setPreguntas(proyectosActualizados)
      setAlerta({
        msg: data.msg,
        error: false,
      });
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PreguntasContext.Provider
      value={{
        preguntas,
        mostrarAlerta,
        submitPregunta,
        obtenerProyecto,
        eliminarPregunta,
      }}
    >
      {children}
    </PreguntasContext.Provider>
  );
};
export { PreguntasProvider };

export default PreguntasContext;
