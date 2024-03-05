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
      <h1 className="text-Secundario_1 font-black text-center mb-7 text-5xl capitalize animate-fade-right animate-duration-[3000ms]">
        Recuperar <span className="text-Principal_1">Cuenta</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="rounded-3xl p-6 border-Principal_1 border-4 shadow-xl animate-fade-left animate-duration-[3000ms]"
        onSubmit={handleSubmit}
      >
        <label
          className="ml-2 text-Principal_1 block text-xl font-bold"
          htmlFor="email"
        >
          Correo
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            className="w-full my-5 ps-10 p-2.5 block rounded-xl border-2 focus:outline-none border-Principal_1 focus:border-Principal_1 focus:ring-1 focus:ring-Principal_1 shadow-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <input
            type="submit"
            value="Enviar Instrucciones"
            className="bg-Principal_3 w-full py-3 text-Principal_1 font-bold text-center rounded-full border-2 border-Principal_1 hover:bg-Principal_1 hover:text-white hover:border-Principal_1 shadow-lg cursor-pointer"
          />
        </div>
      </form>
      <nav className="lg:flex p-4 justify-center">
        <Link
          to="/login-adm"
          className="block text-center font-semibold mt-3 text-slate-500 text-md animate-fade-right animate-duration-[3000ms]"
        >
          ¿Ya tienes una cuenta?{" "}
          <span className="text-Principal_1 font-bold">Inicia Sesión</span>
        </Link>
      </nav>
      <Footer />
    </>
  );
};
export default OlvidePassword;
