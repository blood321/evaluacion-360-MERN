import { useEffect,useState,createContext } from "react";
import clienteAxios from "../config/clienteAxios";
import { useNavigate} from "react-router-dom";

const PreguntasContext=createContext()

const PreguntasProvider=({children})=>{
const [preguntas,setPreguntas]=useState([])
const[Pregunta,setpregunta]=useState([])
const [cargando, setCargando] = useState(false);
const navigate = useNavigate();


useEffect(() => {
    const obtenerPreguntas = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/pregunta", config);
        setPreguntas(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPreguntas();
  }, []);
  const obtenerPregunta = async (id) => {
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
      const { data } = await clienteAxios(`/pregunta/${id}`, config);
      console.log(data)
      setpregunta(data);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };
  const submitPregunta = async (pregunta) => {
    if (proyecto.id) {
      await editarPregunta(pregunta);
    } else {
      await nuevaPregunta(pregunta);
    }
  };
  const editarPregunta = async (pregunta) => {
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
        `/pregunta/${preguntas.id}`,
        pregunta,
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
  const nuevaPregunta = async (Pregunta) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.post("/pregunta", Pregunta, config);
      setPreguntas([...preguntas, data]);
      setAlerta({
        msg: "Pregunta creada correctamente",
        error: false,
      });

      setTimeout(() => {
        setAlerta({});
        navigate("/pregunta");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

    return(
        <PreguntasContext.Provider
        value={{
            preguntas,
            Pregunta,
            obtenerPregunta,
            submitPregunta

        }}
        >{children}

        </PreguntasContext.Provider>
    )
}

export { PreguntasProvider}

export default PreguntasContext