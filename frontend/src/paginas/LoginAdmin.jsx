import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 4000);
      return;
    }

    try {
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/inicio-admin");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 4000);
    }
  };

  const { msg } = alerta;

  return (
    <div className="flex items-center justify-center flex-col py-14 mx-auto mt-9 p-3">
      <div className="mb-7 p-">
        <h1
          className="text-Secundario_1  font-black text-center  text-5xl text-[40px]  xl:text-[70px]
                capitalize animate-fade-right animate-duration-[2000ms]"
        >
          Sesión <span className="text-Principal_1">Administrativa</span>
        </h1>
      </div>

      <form
        className=" rounded-3xl  xl:h-[400px] h-[430px]  p-4 xl:w-[330px] border-Principal_1  shadow-xl animate-fade-left animate-duration-[1000ms] bg-white"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center mx-auto my-2 md:mt15 md:mb-4 bg-gradient-to-r from-Principal_1 to-Principal_2 rounded-full w-10 h-10 hover:transform hover:scale-110 transition-transform duration-400 ease-in-out">
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
          className="ml-1 text-Principal_1 block xl:mt-1 mt-4 mb-2 xl:text-[20px] text-[25px] font-bold"
          htmlFor="email"
        >
          Correo
        </label>
        <div className="relative mb-2  ">
          <div className="absolute inset-y-0 start-0 flex items-center p-4 pointer-events-none   ">
            <svg
              className="w-4 h-4  dark:text-gray-200 "
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
            placeholder="Correo"
            className="w-full my-2 ps-10 p-2.5 pl-[60px] block rounded-xl border-2 focus:outline-none shadow-lg text-gray-200 mt-6d bg-gradient-to-r from-Principal_2 to-Principal_1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label
          className="ml-1 text-Principal_1 block xl:mt-2 mt-2 mb-2 xl:text-[20px] text-[25px] font-bold"
          htmlFor="email"
        >
          Contraseña
        </label>

        <div className="flex flex-col items-center justify-center md:mt-1 mt-2">
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="w-full my-2 ps-10 p-2.5 pl-[60px] blockborder-2 rounded-xl focus:outline-none shadow-lg  text-gray-200 mb-5 bg-gradient-to-r from-Principal_2 to-Principal_1  "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between py-2">
          <input
            type="submit"
            value="Ingresar"
            class="bg-gradient-to-r shadow-xl from-Secundario_1 to-Secundario_2 p-2 py-3 px-8 text-white font-bold text-center rounded-xl  hover:transform hover:scale-105 transition-transform duration-400 ease-in-out"
          />
          <Link
            className="block text-center w-full font-semibold px-2 text-slate-500 text-md animate-fade-right animate-duration-[1000ms]"
            to="/olvide-password"
          >
            ¿Olvidaste tu{" "}
            <span className="text-Principal_1 font-bold">Contraseña?</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-2">
          <Link
            to={"/"}
            className="flex items-end justify-end animate-fade-right animate-duration-[2000ms]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
                     
          </Link>
        </div>
      </form>
      {/* <nav className="lg:flex p-4 justify-center"></nav> */}
      {msg && <Alerta alerta={alerta} />}

      <Footer />
    </div>
  );
};

export default LoginAdmin;
