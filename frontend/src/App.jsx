import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CoorLayout from './layouts/CoorLayout'
import Authlayout from './layouts/Authlayout'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Aloguin from './paginas/Aloguin'
import Aviso from './paginas/Aviso'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Authlayout />}>
                    <Route index element={<Aloguin />} />
                </Route>
                <Route path="aviso-user" element={<Aviso />} />
            </Routes>
            <Routes>
                <Route path="/coordinador" element={<CoorLayout />}>
                    <Route path="login-coordinador" element={<Login />} />
                    <Route path="registrar" element={<Registrar />} />
                    <Route path="olvide-password" element={<OlvidePassword />} />
                    <Route path="olvide-password/:token" element={<NuevoPassword />} />
                    <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
