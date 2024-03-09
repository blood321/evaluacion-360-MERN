import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Tematicas from "../components/Tematicas";
import Footer from "../components/Footer";
import Sidebar_A from "../components/Sidebar_A";

function RutaProtegida() {
  const { auth, cargando } = useAuth();
  if (cargando) return "cargando...";
  return (
    <>
      {auth._id ? (
        <div className="flex">
          <div className="basis-[15%] h-full border">
            <Sidebar_A />
          </div>
          <div className="basis-[85%] border">
            <Header />
            <div>
              <Outlet></Outlet>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Navigate to="/login-adm" />
      )}
    </>
  );
}

export default RutaProtegida;
