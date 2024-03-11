import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alerta";
import logoSena from "../assets/img/logoSena.png";
import logo1Principal from '../assets/img/logo1Principal.png'
import Footer from "../components/Footer";

function Aloguin() {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || email.length < 6) {
      setAlerta({
        msg: "El correo es obligatorio",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 4500);
      
      return;
    }

    try {
      const { data } = await clienteAxios.post("/aprendiz/autenticar", {
        email,
      });
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
      }, 4500);
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2500);
    }
  };

  const { msg } = alerta;

  return (
    <div className="font-roboto md:fixed md:h-full">
      <section className="mx-auto w-full rounded-lg shadow-lg shadow-green-900 overflow-hidden md:flex md:w-[700px] md:h-[400px] md:rounded-3xl md:mx-auto md:fixed bottom-15 inset-x-0 animate-fade-down animate-duration-[2000ms]">
        {/* logo y eslogan */}
        <div className="bg-gradient-to-r from-Secundario_1 to-Secundario_2 h-[356px] pt-8 px-10 text-center rounded-b-3xl md:w-[900px] md:h-full md:rounded-3xl md:mb-6 ">
          <div className="flex items-center justify-center mb-2 md:mb-7 md:mt-5">
            <img
              src={logo1Principal}
              className="w-[240px] h-[120px] animate-fade-down animate-duration-[2000ms]"
              alt="Logo 2"
            />
          </div>
          <h2 className="text-Principal_3 text-[19px] font-bold  ">
            Obtén una visión completa de tu institución con
            <span className="text-[21px] text-Principal_1 font-bold">
              {" "}
              SENA 360°{" "}
            </span>
            la herramienta de Valoraciones
            <span className="text-[21px]  text-Principal_1 font-bold">
              {" "}
              360°{" "}
            </span>
          </h2>
          <Link
            to={"/login-adm"}
            className="flex items-center justify-center mx-auto my-8 md:mt15 md:mb-4 bg-gradient-to-r from-Principal_1 to-Principal_2 rounded-full w-10 h-10 hover:transform hover:scale-110 transition-transform duration-400 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </Link>
        </div>
        {/* formulario */}
        <div className="p-4 h-[400px] flex flex-col items-center justify-center rounded-xl bg-Principal_3 md:w-[650px] md:py-2">
          <img src={logoSena} className="w-10 h-10 bg-cover animate-fade-down animate-duration-[3000ms]" />
          <form htmlFor="email" onSubmit={handleSubmit}>
            <h2 className="my-3 text-[16px] font-semibold justify-center text-justify">
              Se enviará un código de verificación a tu correo electrónico
              institucional, el cual está vinculado con tu número de cédula
            </h2>
            {msg && <Alerta alerta={alerta} />}
            <input
              id="email"
              type="email"
              className="border-2 border-green-600 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-Principal_1 invalid:focus:ring-red-400 peer"
              placeholder="Ingresa tu Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-red-800 hidden peer-invalid:block">
              El Correo es incorrecto
            </p>
            <input
              type="submit"
              className="rounded-2xl w-full p-2 mt-4 text-center font-bold text-white bg-gradient-to-r from-Principal_1 to-Principal_2 hover:cursor-pointer hover:transform hover:scale-105 transition-transform duration-400 ease-in-out"
              value="Enviar Enlace"
            />
          </form>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Aloguin;
