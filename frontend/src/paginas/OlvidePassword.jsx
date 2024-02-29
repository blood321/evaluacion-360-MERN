import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";

import clienteAxios from "../config/clienteAxios";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || email.length < 6) {
      setAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
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
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const { msg } = alerta;
  return (
    <>
      <h1 className="text-Secundario_2 font-black mb-7 text-3xl capitalize">
        Recuperar cuenta
      </h1>
      <form
        className="rounded-3xl  p-6 border-Principal_1 border-4"
        onSubmit={handleSubmit}
      >
        {msg && <Alerta alerta={alerta} />}
        <div className="my-1">
          <label
            className="capitalize text-Secundario_2 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email De Recuperacion"
            className="w-full my-7 p-3 border rounded-xl "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <form className=" flex items-center justify-center">
          <input
            type="submit"
            value="Enviar Instrucciones"
            className="bg-Principal_3 w-full md:w-4/12 text-black capitalize font-bold  text-center rounded-full border border-Secundario_2 hover:bg-Principal_1 hover:text-white hover:border-Principal_1 hover:border-2 md:mx-1"
          />
        </form>
      </form>
      <nav className="lg:flex p-4 justify-center">
        <Link
          to="/login-adm"
          className="block text-center text-slate-500 capitalize text-sm"
        >
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  );
};
export default OlvidePassword;