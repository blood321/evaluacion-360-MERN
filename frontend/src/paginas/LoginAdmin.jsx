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
    <>
    <Link to={'/'} className="flex items-end justify-end animate-fade-right animate-duration-[2000ms]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 my-1 mx-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
      </Link>
      <div className="flex flex-col items-center justify-center">
        
        <div>
          
          <img
            src="src/assets/img/logo2Principal.png"
            alt="Imagen de logotipo"
            className="w-[380px] h-[230px] animate-fade-right animate-duration-[2000ms]"
          />
        </div>
        <form
          className=" rounded-3xl md:h-[340px] p-6 border-Principal_1 border-4 shadow-xl animate-fade-right animate-duration-[2000ms]"
          onSubmit={handleSubmit}
        >
          <div className="my-1 flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              />
            </svg>
          </div>

          <div className="my-2 mt-4 flex items-center relative">
            <input
              id="email"
              type="email"
              placeholder="Correo"
              className="text-center w-full mt-2 p-1 border-2 rounded-full focus:outline-none border-Principal_1 bg-white focus:border-Principal_1 focus:ring-1 focus:ring-Principal_1 shadow-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-4">
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              className="text-center w-full mt-1 p-1 border-2 rounded-full focus:outline-none border-Principal_1 bg-white mb-5 focus:border-Principal_1 focus:ring-1 focus:ring-Principal_1 shadow-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Ingresar"
              className="bg-Principal_3 mt-1 p-1 w-[120px] text-center text-Principal_1 border-2 border-Principal_1 font-bold rounded-full hover:cursor-pointer shadow-md shadow-Principal_1 "
            />
          </div>
          <Link
            className="block text-center font-bold my-5 text-Principal_1 capitalize text-sm"
            to="/olvide-password"
          >
            Olvide mi contraseña
          </Link>
        </form>
        {msg && <Alerta alerta={alerta} />}
      </div>
      <Footer />
      
    </>
  );
};

export default LoginAdmin;
