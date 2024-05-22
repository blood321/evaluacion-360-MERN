import React, { useState, useEffect } from "react";
import { NavBarUser } from "../components/NavBarUser";
import Preguntas from "../components/Preguntas";
import Instructor from "../assets/img/instructor1.jpg";
import Modal from "../components/Modal";
import logoSena from "../assets/img/logoSena.png";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useRespuesta from "../hooks/useRespuesta";

const Responder = () => {
  const id = useParams();
  const { respuestas } = useRespuesta();
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [instructores, setInstructores] = useState([]);
  const [indice, setIndice] = useState(0);
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState({});

  const preguntasConID = respuestas
    ? respuestas.map((respuesta) => ({
        pregunta: respuesta.pregunta.pregunta,
        _id: respuesta.pregunta._id,
      }))
    : [];

  const preguntasUnicas = [
    ...new Set(preguntasConID.map((pregunta) => pregunta.pregunta)),
  ];

  const obtenerIDPreguntaActual = () => {
    const preguntaActual = preguntasConID.find(
      (pregunta) => pregunta.pregunta === preguntasUnicas[indice]
    );
    return preguntaActual ? preguntaActual._id : null;
  };

  const filtrarInstructores = (idPregunta) => {
    const instructoresFiltrados = respuestas.filter((respuesta) => {
      return respuesta.pregunta._id === idPregunta;
    });
    setInstructores(instructoresFiltrados);
  };

  useEffect(() => {
    const idPreguntaActual = obtenerIDPreguntaActual();
    filtrarInstructores(idPreguntaActual);
  }, [indice]);

  const cambiarPalabra = (direccion) => {
    if (direccion === "adelante") {
      if (indice < preguntasUnicas.length - 1) {
        setIndice((prevIndice) => prevIndice + 1);
      }
    } else {
      if (indice > 0) {
        setIndice((prevIndice) => prevIndice - 1);
      }
    }
  };

  const Respuesta = (preguntaId, valor) => {
    setRespuestasSeleccionadas((prevState) => ({
      ...prevState,
      [preguntaId]: valor,
    }));
  };

  return (
    <>
      <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-5 md:px-10 md:w-full md:mx-auto md:mt-4">
        <img src={logoSena} className="w-10 h-10 bg-cover" />
        <NavBarUser />
      </header>
      <div className="mx-auto mt-20 md:mt-20 p-3 px-5 md:flex">
        <section className="mt-4 mx-auto w-full rounded-md shadow-lg shadow-green-800 overflow-hidden md:grid md:grid-cols-3 md:grid-rows-[450px] md:w-auto md:h-[450px] md:rounded-3xl md:mx-auto">
          {/* Contenido de la sección */} {/* Contenido de la sección */}
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
            <div className="mb-10">
              <Preguntas
                pregunta={preguntasUnicas[indice]}
                onNext={() => cambiarPalabra("adelante")}
                onPrevious={() => cambiarPalabra("atras")}
              />
            </div>

            <button
              className={`py-2 px-4  mx-auto bg-gray-300 text-gray-600 rounded-md flex-col`}
              // onClick={handleEnviarEncuestas}
            >
              Enviar Encuesta
            </button>
          </div>
          <div className="mx-auto md:w-full h-[250px] md:h-full mb-9 overflow-y-auto flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              {instructores.map((item) => (
                <div kay={item._id} className="flex md:flex-row p-3">
                  <div className="mb-1 mt-4 flex items-center p-2 md:shadow-lg shadow-2xl shadow-green-800 rounded-2xl overflow-hidden border-2 border-Principal_1 border-x-Principal_2">
                    <img
                      src={Instructor}
                      alt="Instructor 1"
                      className="instructor__photo max-w-[70px] h-[70px] rounded-full"
                    />
                    <h2 className="font-bold text-lg ml-4">
                      {item.instructor.nombre}
                    </h2>
                    <div className="flex flex-col ml-2 text-[15px]">
                      {/* Puedes agregar más contenido aquí si es necesario */}
                      <label>
                        <input
                          type="radio"
                          name={item.instructor.nombre}
                          value="No sé"
                          //   checked={item.respuesta == "No sé"}
                          onChange={(e) => Respuesta(item._id, e.target.value)}
                        />
                        No sé
                      </label>

                      <label>
                        <input
                          type="radio"
                          name={item.instructor.nombre}
                          value="Tal vez"
                          //      checked={item.respuesta === "Tal vez"}
                          //  onChange={}
                        />
                        Tal vez
                      </label>

                      <label>
                        <input
                          type="radio"
                          name={item.instructor.nombre}
                          value="Si"
                          //             checked={item.respuesta === "Si"}
                          onChange={(e) => Respuesta(item._id, e.target.value)}
                        />
                        Si
                      </label>

                      <label>
                        <input
                          type="radio"
                          name={item.instructor.nombre}
                          value="No"
                          //    checked={item.respuesta === "No"}
                          onChange={(e) => Respuesta(item._id, e.target.value)}
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
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
