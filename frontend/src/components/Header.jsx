import { Link } from "react-router-dom";
import logoSena from '../assets/img/logoSena.png'

function Header() {
  return (
    <header className="px-8 py-4 bg-gray-100">
      <div className="md:flex md:justify-between">
        <img src={logoSena} className="w-10 h-10 bg-cover" />

        <input
          type="search"
          placeholder="Buscar proyectos"
          className="rounded-lg lg:w-96 block p-2 border"
        />
        <div className="flex items-center gap-4">
          <Link to="/proyectos/" className="font-bold">
            Proyectos
          </Link>
          <button
            type="button"
            className="text-white text-sm bg-green-400 p-3 rounded-md capitalize font-bold"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
