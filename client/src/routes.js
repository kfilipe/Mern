import { BrowserRouter, Routes, Route } from 'react-router-dom';


// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtos.editar';
import ProdutoCadastrar from './pages/admin/produtos/produtos.cadastrar'

import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar'

// IMPORTS CLIENT
import Home from './pages/client/home';
import ProdutoDetails from './pages/client/produtos/produtos.details';
import Login from './pages/admin/login';

// import PrivateRoute from './services/wAuth';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rota Cliente */}
                <Route path="/" element={<Home />} />
                <Route path="/produtos/:idProduto" element={<ProdutoDetails />} />

                {/* Rota Admin */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin" element={<Dashboard />} />

                <Route path="/admin/produtos" element={<Produtos />} />
                <Route path="/admin/produtos/cadastrar" element={<ProdutoCadastrar />} />
                <Route path="/admin/produtos/editar/:idProduto" element={<ProdutoEditar />} />

                <Route path="/admin/usuarios" element={<Usuarios />} />
                <Route path="/admin/usuarios/cadastrar" element={<UsuarioCadastrar />} />
                <Route path="/admin/usuarios/editar/:idUsuario" element={<UsuarioEditar />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router