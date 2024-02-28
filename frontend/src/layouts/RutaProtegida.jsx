import { Outlet, Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Menuprincipal from "../components/manuPrincipal";
import MenuEvaluacion360 from "../components/menuEvaluacion360";
import MenuCreacionPreguntas from "../components/menuPreguntas";

function RutaProtegida() {
  
  const location = useLocation();
  console.log(location)
  const { auth, cargando } = useAuth();
  if (cargando) return "cargando...";
  
  return (
    <>
      {auth._id ? (
        <div className="bg-gray-100">
          <div className="md:flex md:max-h-screen">
            
            {location.pathname === '/inicio' ? <Menuprincipal /> : null}
            {location.pathname === '/inicio/evaluacion360' ?<MenuEvaluacion360 />  :null}

            {location.pathname === '/inicio/crear-encuestas-aprendices' ?<MenuEvaluacion360 />  :null}
            {location.pathname === '/inicio/crear-encuestas-autoevaluacion' ?<MenuEvaluacion360 />  :null}
            {location.pathname === '/inicio/crear-encuestas-companeros' ?<MenuEvaluacion360 />  :null}
            {location.pathname === '/inicio/crear-encuestas-jefes' ?<MenuEvaluacion360 />  :null}

            {location.pathname === '/inicio/listar-encuestas' ?<Menuprincipal />  :null}

            {location.pathname === '/inicio/crear-preguntas' ?<MenuCreacionPreguntas />  :null}
            {location.pathname === '/inicio/crear-preguntas-aprendices' ?<MenuCreacionPreguntas />  :null}
            {location.pathname === '/inicio/crear-preguntas-autoevaluacion' ?<MenuCreacionPreguntas />  :null}
            {location.pathname === '/inicio/crear-preguntas-companeros' ?<MenuCreacionPreguntas />  :null}
            {location.pathname === '/inicio/crear-preguntas-jefes' ?<MenuCreacionPreguntas />  :null}

            <main className="py-5 pr-10 flex-1 relative">
              <Outlet />
              
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default RutaProtegida;
