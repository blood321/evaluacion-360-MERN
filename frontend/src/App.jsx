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
}
export default App;