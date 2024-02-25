import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {

    const {auth} = useAuth();
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-5">
      <p className="text-xl font-bold">Instructor: {auth.nombre}</p>
      <Link
        to="crear-proyecto"
        className="bg-sky-600 w-9/12 p-2 text-white capitalize font-bold block mt-5 text-center rounded-lg"
      >
        Nuevo Proyecto
      </Link>
    </aside>
  );
};

export default Sidebar;