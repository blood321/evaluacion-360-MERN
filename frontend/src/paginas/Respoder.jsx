import React, { useState, useEffect, useReducer } from "react";
import { NavBarUser } from "../components/NavBarUser";
import Preguntas from "../components/Preguntas";
import Instructor from "../assets/img/instructor1.jpg";
import Respuestas from "../components/Respuestas";
import Modal from "../components/Modal";
import logoSena from "../assets/img/logoSena.png";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const initialState = {
  data: [],
  respuestasPorInstructor: {},
  loading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "SET_RESPUESTAS":
      return {
        ...state,
        respuestasPorInstructor: {
          ...state.respuestasPorInstructor,
          [action.instructor]: action.respuestas,
        },
      };
    default:
      return state;
  }
}

const Responder = () => {
  const id = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePrevious = () => {
    if (preguntaActual === 0) {
      return;
    }
    setPreguntaActual((prevIndice) => prevIndice - 1);
  };

  const handleNext = () => {
    if (preguntaActual === state.data.length - 1) {
      return;
    }
    setPreguntaActual((prevIndice) => prevIndice + 1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await clienteAxios(
          `/detalleEncuesta/responde/${id.id}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  if (state.loading) {
    return <p>Cargando...</p>;
  }

  const datoActual = state.data[preguntaActual];
  const arreglo = state.data.map((objeto) => objeto.instructor.nombre);
  const arregloUnico = arreglo.filter((elemento, indice) => {
    return arreglo.indexOf(elemento) === indice;
  });
  console.log(arreglo)

  // Manejar la actualización de las respuestas
  const handleOptionChange = (instructor, opcion) => {
    dispatch({
      type: "SET_RESPUESTAS",
      instructor,
      respuestas: opcion,
    });
  };

  // Mostrar el modal de confirmación
  const handleEnviarEncuestas = async () => {
    try {
      console.log("Respuestas enviadas:", state.respuestasPorInstructor);
      setModalVisible(true);
    } catch (error) {}
  };

  // Cerrar el modal de confirmación
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    // Aquí puedes implementar la lógica para confirmar el envío de las encuestas
    // Por ejemplo, enviar los datos al servidor
    // Una vez que se complete la acción, cierra el modal
    handleCloseModal();
  };

  document.body.style.overflowY = "hidden";

  return (
    <>
      <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-5 md:px-10 md:w-full md:mx-auto md:mt-4">
        <img src={logoSena} className="w-10 h-10 bg-cover" />
        <NavBarUser />
      </header>
      <div className="mx-auto mt-20 md:mt-20 p-3 px-5 md:flex">
        <section className="mt-4 mx-auto w-full rounded-md shadow-lg shadow-green-800 overflow-hidden md:grid md:grid-cols-3 md:grid-rows-[450px] md:w-auto md:h-[450px] md:rounded-3xl md:mx-auto">
          <div className="bg-gradient-to-r from-Principal_1 to-Principal_2 h-[200px] px-10 text-center rounded-b-3xl md:w-[350px] md:h-full md:rounded-3xl md:mb-6 flex flex-col md:flex-col justify-center items-center md:grid-row">
            <h2 className="text-Principal_3 text-3xl font-bold items-center md:mb-2">
              NOMBRE ENCUESTA
            </h2>
            <div className="mt-4 md:mt-20">
              <p className="text-Principal_3 text-2xl items-center mb-6">
                Tiempo restante: 10 minutos
              </p>
            </div>
          </div>
          <div className="mx-auto md:w-[370px] md:h-full md:flex md:justify-center md:items-center flex flex-col">
            {state.data.length > 0 && preguntaActual < state.data.length && (
              <div className="mb-10">
                <Preguntas
                  pregunta={datoActual.pregunta.pregunta}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />
              </div>
            )}
            <button
              className={`py-2 px-4  mx-auto bg-gray-300 text-gray-600 rounded-md flex-col`}
              onClick={handleEnviarEncuestas}
            >
              Enviar Encuesta
            </button>
          </div>

          <div className="">
            {arregloUnico.map((instructor) => (
              <div key={instructor} className="mb-2 mt-3">
                <div className="flex items-center p-1.5 w-[340px] md:shadow-lg shadow-2xl shadow-green-800 rounded-2xl overflow-hidden border-2 border-Principal_1 border-x-Principal_2">
                  <img
                    src={Instructor}
                    alt={`Instructor ${instructor}`}
                    className="instructor__photo max-w-[80px] h-[80px] ml-6 rounded-full"
                  />
                  <h3 className="font-bold text-lg ml-5">{instructor}</h3>
                  <div className="flex flex-col ml-5 text-[15px]">
                    {["Excelente", "Muy Bueno", "Bueno", "Regular", "Malo"].map(
                      (opcion) => (
                        <label
                          key={opcion}
                          className="cursor-pointer flex items-center mb-2"
                        >
                          <input
                            type="radio"
                            value={opcion}
                            checked={
                              state.respuestasPorInstructor[instructor] ===
                              opcion
                            }
                            onChange={() =>
                              handleOptionChange(instructor, opcion)
                            }
                          />
                          <span className="radio-button w-4 h-4 rounded-full bg-gray-500">
                            {opcion}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {modalVisible && (
        <Modal
          title="¿Está seguro de enviar las encuestas?"
          message="Una vez enviadas, no podrá modificar las respuestas."
          onConfirm={handleConfirm}
          onCancel={handleCloseModal}
        />
      )}
      <Footer />
    </>
  );
};

export default Responder;
