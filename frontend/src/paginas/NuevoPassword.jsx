import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alerta";
import Footer from "../components/Footer";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [passwordModificado, setPasswordModificado] = useState(false);
  const params = useParams();
  const { token } = params;
  
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        const { data } = await clienteAxios(
          `/usuarios/olvide-password/${token}`
        );
        setTokenValido(true);
        console.log(data);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe contener mínimo 6 caracteres",
        error: true,
      });
      return;
    }
    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setTimeout(() => {
        setAlerta({})
      }, 3000)
      setPasswordModificado(true);
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
      <h1 className="text-Secundario_1 mb-7 text-center font-black text-5xl capitalize animate-fade-left animate-duration-[3000ms]">
        Reestablecer{" "}
        <span className="text-Principal_1">Contraseña</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      {tokenValido && (
        <form
          className="my-5 bg-white shadow rounded-3xl border-Principal_1 border-4 py-3 px-7 animate-fade-right animate-duration-[3000ms]"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              className="text-Principal_1 block text-xl font-bold"
              htmlFor="password"
            >
              Nueva Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu nueva contraseña"
              className="w-full my-5 block rounded-xl border-2 p-2.5 focus:outline-none border-Principal_1 focus:border-Principal_1 focus:ring-1 focus:ring-Principal_1 shadow-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Confirmar contraseña"
            className="bg-white mb-5 w-full py-3 text-Secundario_1 border-2 border-Principal_1 font-bold rounded-full hover:cursor-pointer hover:bg-Principal_1 hover:text-white hover:border-Principal_3"
          />
        </form>
      )}
      {passwordModificado && (
        <Link
        to="/login-adm"
        className="block text-center my-5 font-bold text-Principal_1 text-xl animate-fade-down animate-duration-[3000ms]"
        >
          <p className="text-Secundario_1">Ahora puedes</p>
          Inicia Sesión
        </Link>
      )}
      <Footer />
    </>
  );
};
export default NewPassword;