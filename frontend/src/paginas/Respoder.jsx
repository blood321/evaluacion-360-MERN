import { useState, useEffect } from "react";
import { NavBarUser } from "../components/NavBarUser";
import Preguntas from "../components/Preguntas";
import Respuestas from "../components/Respuestas";
import Modal from "../components/Modal"; // Importa tu componente Modal aquí
import logoSena from '../assets/img/logoSena.png'
import Footer from "../components/Footer";
import useProyectos from "../hooks/useProyectos";

const Responder = () => {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [todasRespondidas, setTodasRespondidas] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const preguntasPorInstructor = 2; // Cantidad de preguntas por cada instructor

  const preguntas = [
    "¿En qué medida el instructor fomenta la participación y el diálogo en el aula?",
    "¿En qué medida el instructor Habla contigo?",
    // Agrega más preguntas aquí según sea necesario
  ];

  // Simula la obtención de instructores de la base de datos
  const obtenerInstructores = () => {
    return [
      { nombre: "instructor 1", id: 1 },
      { nombre: "instructor 2", id: 2 },
      { nombre: "Instructor 3", id: 3 },
      // Agrega más instructores aquí según sea necesario
    ];
  };

  const instructores = obtenerInstructores();

  useEffect(() => {
    // Verificar si todas las preguntas han sido respondidas para todos los instructores
    const totalPreguntasEsperadas =
      preguntas.length * instructores.length * preguntasPorInstructor;
    const preguntasRespondidas = Object.keys(respuestas).length;
    const todasRespondidas = preguntasRespondidas === totalPreguntasEsperadas;
    setTodasRespondidas(todasRespondidas);
  }, [respuestas, preguntas, instructores, preguntasPorInstructor]);

  const handlePrevious = () => {
    setPreguntaActual((prevState) => Math.max(0, prevState - 1));
  };

  const handleNext = () => {
    setPreguntaActual((prevState) =>
      Math.min(preguntas.length - 1, prevState + 1)
    );
  };

  const handleEnviarEncuestas = () => {
    // Mostrar el modal de confirmación
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    // Cerrar el modal de confirmación
    setModalVisible(false);
  };

  const handleConfirm = () => {
    // Aquí puedes implementar la lógica para confirmar el envío de las encuestas
    // Por ejemplo, enviar los datos al servidor
    // Una vez que se complete la acción, cierra el modal
    handleCloseModal();
  };

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
                pregunta={preguntas[preguntaActual]}
                onPrevious={handlePrevious}
                onNext={handleNext}
              />
            </div>
            <button
              className={`py-2 px-4  mx-auto bg-gray-300 text-gray-600 rounded-md flex-col ${
                todasRespondidas
                  ? "bg-green-500 text-white"
                  : "cursor-not-allowed"
              }`}
              onClick={handleEnviarEncuestas}
              disabled={!todasRespondidas}
            >
              Enviar Encuesta
            </button>
          </div>

          <div className="">
            <div className="mx-auto md:w-full h-[250px] md:h-full mb-9 overflow-y-auto flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                {instructores.map((instructor) => (
                  <Respuestas
                    key={instructor.id}
                    instructor={instructor.nombre}
                    opciones={[
                      "Excelente",
                      "Muy Bueno",
                      "Bueno",
                      "Regular",
                      "Malo",
                    ]}
                    respuestas={respuestas[instructor.nombre] || {}}
                    setRespuestas={(newRespuestas) => {
                      setRespuestas((prevRespuestas) => ({
                        ...prevRespuestas,
                        [instructor.nombre]: newRespuestas,
                      }));
                    }}
                  />
                ))}
              </div>
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
