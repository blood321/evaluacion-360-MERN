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
const Responder = () => {
  const id = useParams();
  const[respuesta]=useRespuesta()
  const [todo, setTodo] = useState();
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  
  console.log(respuesta);
  const [indice, setIndice] = useState(0); // Estado para el índice de la pregunta actual
  // Mapea las respuestas para obtener un array de objetos { pregunta, _id }
  const preguntasConID =  todo ? todo.map((respuesta) => ({
    pregunta: respuesta.pregunta.pregunta,
    _id: respuesta.pregunta._id,
  })): [];

  // Filtra y mapea solo las preguntas únicas
  const preguntasUnicas = [
    ...new Set(preguntasConID.map((pregunta) => pregunta.pregunta)),
  ];

  // Función para obtener el ID de la pregunta actual
  const obtenerIDPreguntaActual = () => {
    const preguntaActual = preguntasConID.find(
      (pregunta) => pregunta.pregunta === preguntasUnicas[indice]
    );
    return preguntaActual ? preguntaActual._id : null;
  };

  useEffect(() => {
    const idPreguntaActual = obtenerIDPreguntaActual();
    addmensaje(idPreguntaActual);
  }, [indice, addmensaje]);

  const cambiarPalabra = (direccion) => {
    if (direccion === "adelante") {
      // Incrementar el índice si no se ha alcanzado el límite máximo
      if (indice < preguntasUnicas.length - 1) {
        setIndice((prevIndice) => prevIndice + 1);
      }
    } else {
      // Decrementar el índice si no se ha alcanzado el límite mínimo
      if (indice > 0) {
        setIndice((prevIndice) => prevIndice - 1);
      }
    }
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
            <div className="mb-10">
              <Preguntas
              // pregunta={datoActual.pregunta.pregunta}
              // onPrevious={handlePrevious}
              // onNext={handleNext}
              />
            </div>

            <button
              className={`py-2 px-4  mx-auto bg-gray-300 text-gray-600 rounded-md flex-col`}
              // onClick={handleEnviarEncuestas}
            >
              Enviar Encuesta
            </button>
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
