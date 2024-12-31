import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authlayout from "./layouts/Authlayout";
import RutaProtegida from "./layouts/RutaProtegida";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";
import NuevoProyecto from "./paginas/NuevoProyecto";
import Aloguin from "./paginas/Aloguin";
import Aviso from "./paginas/Aviso";
import Responder from "./paginas/Respoder";
import LoginAdmin from "./paginas/LoginAdmin.jsx";
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
import Excel from "./paginas/Excel.jsx";
import { AuthProvider } from "./context/AuthProvider";
import { ProyectosProvider } from "./context/ProyectosProvider";
import { PreguntasProvider } from "./context/preguntasProvider.jsx";
import { EncuestasProvider } from "./context/EncuestasProvider.jsx";
import { RespuestasProvider } from "./context/RespuestasProvider.jsx";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PreguntasProvider>
          <ProyectosProvider>
            <EncuestasProvider>
              <RespuestasProvider>
                <Routes>
                  <Route path="/" element={<Authlayout />}>
                    <Route index element={<Aloguin />} />
                    <Route
                      path="olvide-password"
                      element={<OlvidePassword />}
                    />
                    <Route
                      path="olvide-password/:id"
                      element={<NuevoPassword />}
                    />
                  </Route>

                  <Route path="/Login" element={<LoginAdmin />} />
                  <Route path="login-adm" element={<LoginAdmin />} />
                  <Route path="aviso/:id" element={<Aviso />} />

                  <Route path="responder/:id" element={<Responder />} />

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
                      path="crear-preguntas-companeros"
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
                    <Route path="Excel" element={<Excel />} />
                    <Route path="resultados" element={<Resultados />} />
                    <Route path="crear-proyecto" element={<NuevoProyecto />} />
                    <Route
                      path="/inicio-admin/Listar-encuestas/:id"
                      element={<CrearEncuestasAprendices />}
                    />
                  </Route>
                </Routes>
              </RespuestasProvider>
            </EncuestasProvider>
          </ProyectosProvider>
        </PreguntasProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
