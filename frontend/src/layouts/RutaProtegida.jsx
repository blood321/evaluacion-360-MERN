import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Tematicas from "../components/Tematicas";
import Footer from "../components/Footer";

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
              <main className="py-5 pr-10 flex-1">
                <Tematicas />
                <Outlet />
              </main>
          </div>
          <Footer />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default RutaProtegida;
