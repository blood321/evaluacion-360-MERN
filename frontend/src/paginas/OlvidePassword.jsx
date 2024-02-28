import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";


import clienteAxios from "../config/clienteAxios";


const OlvidePassword = () => {
  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault()
    if (email === '' || email.length < 6) {
      setAlerta({
        msg: 'El email es obligatorio',
        error: true
      })
      return
    }
    try {
      const {data} = await clienteAxios.post("/usuarios/olvide-password", { email })
      setAlerta({
        msg: data.msg,
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 font-black mb-7 text-6xl capitalize">
        Recuperar cuenta <span className="text-slate-700">Proyectos</span>
      </h1>
      <form className="my-7 bg-white shadow rounded-lg px-10 py-5" onSubmit={handleSubmit}>
      { msg && <Alerta alerta={alerta}/> }
        <div className="my-1">
          <label
            className="capitalize text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full my-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-sky-700 mb-5 w-full py-3 text-white capitalize font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-color"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/login-coordinador"
          className="block text-center text-slate-500 capitalize text-sm"
        >
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          to="/registrar"
          className="block text-center text-slate-500 capitalize text-sm"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
};
export default OlvidePassword;