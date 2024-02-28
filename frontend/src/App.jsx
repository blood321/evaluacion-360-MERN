import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";

import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import { AuthProvider } from "./context/AuthProvider";
import { ProyectosProvider } from "./context/ProyectosProvider";
import { PreguntasProvider } from "./context/PreguntasProvider";
import CrearPreguntas from "./paginas/CrearPreguntas";
import Evaluacion360 from "./paginas/Evaluacion360";
import CrearEncuestasAprendices from "./paginas/Crear-encuestas-aprendices";
import CrearEncuestasAutoevaluacion from "./paginas/Crear-encuestas-autoevaluacion";
import CrearEncuestasJefes from "./paginas/Crear-encuestas-jefes";
import CrearEncuestasCompañeros from "./paginas/Crear-encuestas-compañeros";
import CrearPreguntasAprendices from "./paginas/Crear-preguntas-aprendices";
import CrearPreguntasAutoevaluacion from "./paginas/Crear-preguntas-autoevaluacion";
import CrearPreguntasJefes from "./paginas/crear-preguntas-jefes";
import CrearPreguntasCompanros from "./paginas/Crear-preguntas-companeros";
import ListarEncuestas from "./paginas/Listar-encuestas";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PreguntasProvider>
        <ProyectosProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>
            <Route path="/inicio" element={<RutaProtegida />}>
              <Route index element={<inicio/>} />
              <Route path="evaluacion360" element={<Evaluacion360/>} />
              <Route path="crear-preguntas" element={<CrearPreguntas/>} />

              <Route path="crear-encuestas-aprendices" element={<CrearEncuestasAprendices/>} />
              <Route path="crear-encuestas-autoevaluacion" element={<CrearEncuestasAutoevaluacion/>} />
              <Route path="crear-encuestas-jefes" element={<CrearEncuestasJefes/>} />
              <Route path="crear-encuestas-companeros" element={<CrearEncuestasCompañeros/>} />
              <Route path="listar-encuestas" element={<ListarEncuestas/>} />

              <Route path="crear-preguntas-aprendices" element={<CrearPreguntasAprendices/>} />
              <Route path="crear-preguntas-autoevaluacion" element={<CrearPreguntasAutoevaluacion/>} />
              <Route path="crear-preguntas-jefes" element={<CrearPreguntasJefes/>} />
              <Route path="crear-preguntas-companeros" element={<CrearPreguntasCompanros/>} />



            </Route>
          </Routes>
        </ProyectosProvider>
        </PreguntasProvider>
      </AuthProvider>
    </BrowserRouter>    
  );
}

export default App;
