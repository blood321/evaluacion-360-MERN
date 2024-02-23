import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Tematicas from "../components/Tematicas";

function RutaProtegida() {
  const { auth, cargando } = useAuth();
  if (cargando) return "cargando...";
  return (
    <>
      {auth._id ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen">
            <Sidebar />
              <div className="flex items-center">
                <Tematicas/>
                <main className="py-5 pr-10 flex-1">
                  <Outlet />
              </main>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default RutaProtegida;
