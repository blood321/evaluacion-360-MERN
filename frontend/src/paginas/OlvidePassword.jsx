import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import Footer from "../components/Footer";

import clienteAxios from "../config/clienteAxios";

const OlvidePassword = () => {
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
      }, 3000);
      return;
    }
    try {
      const { data } = await clienteAxios.post("/usuarios/olvide-password", {
        email,
      });
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
      }, 3000);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 3000);
    }
  };
  const { msg } = alerta;
  return (
      <>
          <h1
              className="text-Secundario_1  font-black text-center mb-7 text-5xl text-[50px]  xl:text-[70px]
      capitalize animate-fade-right animate-duration-[2000ms]"
          >
              Recuperar <span className="text-Principal_1">Cuenta</span>
          </h1>
          {msg && <Alerta alerta={alerta} />}
          <form
              className="rounded-3xl  xl:h-[300px] h-[430px] xl:p-3 p-4  border-Principal_1 border-4 shadow-xl animate-fade-left animate-duration-[1000ms] bg-white"
              onSubmit={handleSubmit}
          >
              <div className="flex items-center justify-center mx-auto my-1 md:mt15 md:mb-2 bg-gradient-to-r from-Principal_1 to-Principal_2 rounded-full w-10 h-10 hover:transform hover:scale-110 transition-transform duration-400 ease-in-out">
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
              </div>
              <label
                  className="ml-2 text-Principal_1 block xl:mt-2 mt-2 mb-4 xl:text-[20px] text-[25px] font-bold"
                  htmlFor="email"
              >
                  Correo
              </label>
              <div className="relative mb-6  ">
                  <div className="absolute inset-y-0 start-0 flex items-center p-4 pointer-events-none bg-gradient-to-r from-Principal_2 to-Principal_1   ">
                      <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 16"
                      >
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                  </div>
                  <input
                      id="email"
                      type="email"
                      placeholder="Correo de Recuperación"
                      className="w-full my-2 ps-15 p-2.5 pl-[60px] block rounded-xl border-2 focus:outline-none shadow-lg  mt-4"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                  />
              </div>
              <div className="flex flex-col items-center justify-center md:mt-2 mt-10">
                  <input
                      type="submit"
                      value="Enviar Instrucciones"
                      className="bg-Principal_3 w-full py-3 text-Principal_1 font-bold text-center rounded-xl border-2 border-Principal_1 hover:bg-gradient-to-r from-Principal_2 to-Principal_1 hover:text-white  shadow-lg cursor-pointer"
                  />
                  <div className="py-4">
                      <Link
                          to="/login-adm"
                          className="block text-center font-semibold md:mt-2 mt-10 text-slate-500 text-md animate-fade-right animate-duration-[1000ms]"
                      >
                          ¿Ya tienes una cuenta? <span className="text-Principal_1 font-bold">Inicia Sesión</span>
                      </Link>
                  </div>
              </div>
          </form>
          <nav className="lg:flex p-4 justify-center"></nav>
          <Footer />
      </>
  )
};
export default OlvidePassword;
