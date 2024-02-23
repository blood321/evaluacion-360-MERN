import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Authlayout from './layouts/Authlayout'
import RutaProtegida from './layouts/RutaProtegida'
import CoorLayout from './layouts/CoorLayout'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'
import Proyecto from './paginas/Proyecto'
import EditarProyecto from './paginas/EditarProyecto'
import Aloguin from './paginas/Aloguin'
import Aviso from './paginas/Aviso'

import { AuthProvider } from './context/AuthProvider'
import { ProyectosProvider } from './context/ProyectosProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/Authlayout.jsx";
import Login from "./paginas/Login.jsx";
import Registrar from "./paginas/Registrar.jsx";
import OlvidePassword from "./paginas/OlvidePassword.jsx";
import NuevoPassword from "./paginas/NuevoPassword.jsx";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta.jsx";
import Pruebas from "./paginas/Pruebas.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />;
          <Route path="registrar" element={<Registrar />} />;
          <Route path="olvide-password" element={<OlvidePassword />} />;
          <Route path="olvide-password/:token" element={<NuevoPassword />} />;
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />;
          <Route path="Prueba" element={<Pruebas />} />;


        </Route>
      </Routes>
    </BrowserRouter>
  );
    return (
        <BrowserRouter>
            <AuthProvider>
                <ProyectosProvider>
                    <Routes>
                        <Route path="/" element={<Authlayout />}>
                            <Route index element={<Aloguin />} />
                        </Route>
                        <Route path="/aviso" element={<Aviso />} />
                        <Route path="/" element={<CoorLayout />}>
                            <Route path="/login-coordinador" element={<Login />} />
                            <Route path="registrar" element={<Registrar />} />
                            <Route path="olvide-password" element={<OlvidePassword />} />
                            <Route path="olvide-password/:token" element={<NuevoPassword />} />
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
    )
}
export default App;
