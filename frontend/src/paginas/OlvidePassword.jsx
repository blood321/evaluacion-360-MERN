import { Link } from "react-router-dom"
const OlvidePassword = () => {
    return (
      <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Recueperar cuenta{' '}
        <span className="text-slate-700">Proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-x1 font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-x1 bg-gray-50"
          />
        </div>
      
        <input
          type="submit"
          value="Enviar Instrucciones De Recuperacion"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-color"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          to="/registrar"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿Ya tienes una cuenta? Inicia Sesion
        </Link>
        <Link
          to="/registrar"
          className="block text-center my-5 text-slate-500 uppercase text-sm"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
    )
  }
  
  export default OlvidePassword