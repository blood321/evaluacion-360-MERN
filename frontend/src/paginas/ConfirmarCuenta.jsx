import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setcuentaConfirmada] = useState(false);

  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        //TODO: Mover hacia un cliente Axios
        const url = `http://localhost:3000/api/usuarios/confirmar/${id}`;
        const {data} = await axios(url);
        setAlerta({
          msg: data.msg,
          error: false,
        });
        setcuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    confirmarCuenta();
  }, []);

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirmar Cuenta Y Crea Nuevos{" "}
        <span className="text-slate-700">Proyectos</span>
      </h1>
      <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link
            to="/"
            className="block text-center my-5 text-slate-500 uppercase text-sm"
          >
            Inicia Sesión
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
