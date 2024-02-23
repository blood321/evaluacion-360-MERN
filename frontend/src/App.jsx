import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authlayout from "./layouts/Authlayout";
import RutaProtegida from "./layouts/RutaProtegida";
import CoorLayout from "./layouts/CoorLayout";

import Login from "./paginas/Login";
import LoginAdmin from "./paginas/LoginAdmin.jsx";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Proyectos from "./paginas/Proyectos";
import NuevoProyecto from "./paginas/NuevoProyecto";
import Proyecto from "./paginas/Proyecto";
import EditarProyecto from "./paginas/EditarProyecto";
import Aloguin from "./paginas/Aloguin";
import Aviso from "./paginas/Aviso";

import { AuthProvider } from "./context/AuthProvider";
import { ProyectosProvider } from "./context/ProyectosProvider";
import Pruebas from "./paginas/Pruebas.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            {/* Páginas para el inicio de la encuesta */}
            <Route path="/" element={<Authlayout />}>
              <Route index element={<Aloguin />} />
            </Route>
            <Route path="/aviso" element={<Aviso />} />
            {/* Páginas de la ruta del Coordinador */}
            <Route path="/" element={<CoorLayout />}>
              <Route path="/prueba" element={<Pruebas />} />
              <Route path="/login-admin" element={<LoginAdmin />} />
              <Route path="/login-coordinador" element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>
            {/* Páginas con ruta protegida para la creación de encuestas por el Coordinador */}
            <Route path="/proyectos" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path="crear-proyecto" element={<NuevoProyecto />} />
              <Route path=":id" element={<Proyecto />} />
              <Route path="editar/:id" element={<EditarProyecto />} />
            </Route>
          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
