import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Sidebar_A from "../components/Sidebar_A";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RutanoProtegida() {
  document.body.style.overflowY = "hidden";
  const { auth, cargando } = useAuth();
  if (cargando) return "cargando...";
  return (
    <>
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
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default RutanoProtegida;
