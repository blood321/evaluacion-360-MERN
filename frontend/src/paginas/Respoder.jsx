import React, { useState, useEffect } from "react";
import { NavBarUser } from "../components/NavBarUser";
import Preguntas from "../components/Preguntas";
import Instructor from "../assets/img/instructor1.jpg";
import Modal from "../components/Modal";
import logoSena from "../assets/img/logoSena.png";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useRespuesta from "../hooks/useRespuesta";
import clienteAxios from "../config/clienteAxios";

const Responder = () => {
  const n = localStorage.getItem("respuestas");
  const cambiar = JSON.parse(n);
  const preguntas = Object.entries(cambiar); // Convertimos el objeto en un array de [pregunta, instructores]
  const [i, setPreguntas] = useState(preguntas);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para rastrear la pregunta actual
  const [modalVisible, setModalVisible] = useState(false);
  const handleNext = () => {
    if (currentIndex < preguntas.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  const handleChangeRespuesta = (preguntaIndex, index, nuevaRespuesta) => {
    // Crear una copia de las preguntas para actualizar solo la respuesta de la pregunta actual

    const preguntasActualizadas = [...i];

    // Actualizar la respuesta solo en la pregunta y en el instructor correcto
    preguntasActualizadas[preguntaIndex][1][index].respuesta = nuevaRespuesta;
    console.log(JSON.stringify(preguntasActualizadas));
    // Actualizar el estado con las respuestas modificadas
    setPreguntas(preguntasActualizadas);

    const transformToObject = (list) => {
      return list.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    };

    const transformedData = transformToObject(preguntasActualizadas);
    localStorage.setItem("respuestas", JSON.stringify(transformedData));

    // Actualizar el localStorage con el nuevo estado de las preguntas
  };
  const handleEnviarEncuestas = async() => {
    console.log(i);
    const { data } = await clienteAxios.put(
      `/respuesta/n`,i
    );
    console.log(data);
  }
  useEffect(() => {
    const n = localStorage.getItem("respuestas");
    if (n) {
      const cambiar = JSON.parse(n);
      const preguntasFormateadas = Object.entries(cambiar); // Formateamos las preguntas
      setPreguntas(preguntasFormateadas);
    }
  }, []);
  console.log(i);
  return (
    <>
      <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-5 md:px-10 md:w-full md:mx-auto md:mt-4">
        <img src={logoSena} className="w-10 h-10 bg-cover" />
        <NavBarUser />
      </header>
      <div className="mx-auto mt-20 md:mt-20 p-3 px-5 md:flex ">
        <section className="mt-4 mx-auto w-full rounded-md shadow-lg shadow-green-800 bg-white overflow-hidden md:grid md:grid-cols-3 md:grid-rows-[450px] md:w-auto md:h-[450px] md:rounded-3xl md:mx-auto">
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
          <div className="mx-auto md:w-[370px] md:h-full md:flex md:justify-center md:items-center flex flex-col ">
            <div className="mb-10"></div>
            <div>
              {" "}
              {
                <Preguntas
                  pregunta={i[currentIndex][0]}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              }
            </div>

            <button
              className={`py-2 px-4  mx-auto bg-gray-300 text-gray-600 rounded-md flex-col`}
              onClick={handleEnviarEncuestas}
            >
              Enviar Encuesta
            </button>
          </div>
        </section>
        {i[currentIndex][1].map(({ id, instructor, respuesta }, index) => (
          <div key={id} className="flex flex-col justify-center items-center">
            <div className="flex md:flex-row p-3">
              <div className="mb-1 mt-4 flex items-center p-2 md:shadow-lg shadow-2xl shadow-green-800 rounded-2xl overflow-hidden border-2 border-Principal_1 border-x-Principal_2">
                <img
                  src={Instructor}
                  className="instructor__photo max-w-[70px] h-[70px] rounded-full"
                />
                <h2 className="font-bold text-lg ml-4">{instructor}</h2>
                <div className="flex flex-col ml-2 text-[15px]">
                  <label>
                    <input
                      name={id}
                      type="radio"
                      value="2"
                      onChange={(e) =>
                        handleChangeRespuesta(
                          currentIndex,
                          index,
                          e.target.value
                        )
                      }
                      checked={respuesta === "2"}
                    />
                    rara vez
                  </label>
                  <label>
                    <input
                      name={id}
                      type="radio"
                      value="3"
                      onChange={(e) =>
                        handleChangeRespuesta(
                          currentIndex,
                          index,
                          e.target.value
                        )
                      }
                      checked={respuesta === "3"}

                    />
                    Tal vez
                  </label>
                  <label>
                    <input
                      name={id}
                      type="radio"
                      value="4"
                      onChange={(e) =>
                        handleChangeRespuesta(
                          currentIndex,
                          index,
                          e.target.value
                        )
                      }
                      checked={respuesta === "4"}

                    />
                    Si
                  </label>
                  <label>
                    <input
                      name={id}
                      type="radio"
                      value="1"
                      onChange={(e) =>
                        handleChangeRespuesta(
                          currentIndex,
                          index,
                          e.target.value
                        )
                      }
                      checked={respuesta === "1"}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
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
