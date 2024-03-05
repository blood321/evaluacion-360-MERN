import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authlayout from "./layouts/Authlayout";
import RutaProtegida from "./layouts/RutaProtegida";
import CoorLayout from "./layouts/CoorLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";
import IniAdmin from "./paginas/IniAdmin.jsx";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Proyectos from "./paginas/Proyectos";
import NuevoProyecto from "./paginas/NuevoProyecto";
import Proyecto from "./paginas/Proyecto";
import EditarProyecto from "./paginas/EditarProyecto";
import Aloguin from "./paginas/Aloguin";
import Aviso from "./paginas/Aviso";
import Respoder from "./paginas/Respoder";
import { AuthProvider } from "./context/AuthProvider";
import { ProyectosProvider } from "./context/ProyectosProvider";
import LoginAdmin from "./paginas/LoginAdmin.jsx";
import LayoutSe from "./layouts/LayoutSe.jsx";
import Encuestas from "./paginas/Encuestas.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            <Route path="/" element={<Authlayout />}>
              <Route index element={<Aloguin />} />
              <Route path="login" element={<Login />}/>
            </Route>

            <Route path="InicioAdmin" element={<IniAdmin />} />
            <Route path="/aviso/:email" element={<Aviso />} />
            <Route path="responder" element={<Respoder />} />
            <Route path="/login-adm" element={<LoginAdmin />} />

            <Route path="/" element={<LayoutSe />}>
            </Route>
              <Route path="InicioAdmin" element={<IniAdmin />} />
              <Route path="Encuestas" element={<Encuestas />} />

            <Route path="Componer" element={<Componer />} />
            <Route path="/aviso" element={<Aviso />} />
            <Route path="/Login" element={<LoginAdmin />} />

            <Route path="/" element={<CoorLayout />}>
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

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
            <Route path="proyectos" element={<RutaProtegida />}>
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
