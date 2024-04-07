import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authlayout from "./layouts/Authlayout";
import RutaProtegida from "./layouts/RutaProtegida";
import CoorLayout from "./layouts/CoorLayout";
import LayoutSe from "./layouts/LayoutSe.jsx";
import Login from "./paginas/Login";
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
import Respoder from "./paginas/Respoder";
import LoginAdmin from "./paginas/LoginAdmin.jsx";
import Admin from "./paginas/Admin.jsx";
import CrearEncuestasAprendices from "./paginas/Crear-encuestas-aprendices.jsx";
import RutanoProtegida from "./layouts/rutaNoprotegida.jsx";
import Inicio from "./components/inicio.jsx";
import CrearEncuestasCompaneros from "./paginas/Crear-encuestas-companeros.jsx";
import CrearEncuestasjefes from "./paginas/Crear-encuestas-jefes.jsx";
import CrearPreguntasAprendices from "./paginas/Crear-preguntas-aprendices.jsx";
import CrearPreguntasCompaneros from "./paginas/Crear-preguntas-compañeros.jsx";
import CrearPreguntasJefes from "./paginas/Crear-preguntas-jefes.jsx";
import Resultados from "./paginas/Resultados.jsx";
import ListarEncuestas from "./paginas/Listar-encuestas.jsx";

import { AuthProvider } from "./context/AuthProvider";
import { ProyectosProvider } from "./context/ProyectosProvider";
import { PreguntasProvider } from "./context/preguntasProvider.jsx";
import { EncuestasProvider } from "./context/EncuestasProvider.jsx";
import Eliminar from "./components/Eliminar.jsx";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PreguntasProvider>
          <ProyectosProvider>
            <EncuestasProvider>
              <Routes>
                <Route path="/" element={<Authlayout />}>
                  <Route index element={<Aloguin />} />
                  <Route path="olvide-password" element={<OlvidePassword />} />
                  <Route
                    path="olvide-password/:id"
                    element={<NuevoPassword />}
                  />
                </Route>

                <Route path="/Login" element={<LoginAdmin />} />
                <Route path="login-adm" element={<LoginAdmin />} />
                <Route path="aviso/:id" element={<Aviso />} />
                <Route path="responder" element={<Respoder />} />

                <Route
                  path="inicio-administrador"
                  element={<RutanoProtegida />}
                >
                  <Route index element={<Inicio />} />
                </Route>

                <Route path="inicio-admin" element={<RutaProtegida />}>
                  <Route index element={<Inicio />} />
                  <Route
                    path="crear-encuestas-aprendices"
                    element={<CrearEncuestasAprendices />}
                  />
                  <Route
                    path="crear-encuestas-companeros"
                    element={<CrearEncuestasCompaneros />}
                  />
                  <Route
                    path="crear-encuestas-jefes"
                    element={<CrearEncuestasjefes />}
                  />
                  <Route
                    path="crear-preguntas-aprendices"
                    element={<CrearPreguntasAprendices />}
                  />
                  <Route
                    path="crear-preguntas-compañeros"
                    element={<CrearPreguntasCompaneros />}
                  />
                  <Route
                    path="crear-preguntas-jefes"
                    element={<CrearPreguntasJefes />}
                  />
                  <Route
                    path="listar-encuestas"
                    element={<ListarEncuestas />}
                  />
                  <Route path="resultados" element={<Resultados />} />
                  <Route path="crear-proyecto" element={<NuevoProyecto />} />
                  <Route path="/inicio-admin/Listar-encuestas/:id" element={<CrearEncuestasAprendices/>} />
                </Route>
              </Routes>
            </EncuestasProvider>
          </ProyectosProvider>
        </PreguntasProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
