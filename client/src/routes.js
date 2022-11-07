import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


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

import PrivateRoute from './services/wAuth';

// const PrivateRoute = ({ children, redirectTo }) => {
//     const isAuthenticated = localStorage.getItem("&app-token") !== null;
//     console.log("isAuth: ", isAuthenticated);
//     return isAuthenticated ? children : <Navigate to={redirectTo} />
// }

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rota Cliente */}
                <Route path="/" element={<Home />} />
                <Route path="/produtos/:idProduto" element={<ProdutoDetails />} />

                {/* Rota Admin */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin" element={
                    <PrivateRoute redirectTo="/admin/login">
                        <Dashboard />
                    </PrivateRoute>
                }
                />

                <Route path="/admin/produtos" element={
                    <PrivateRoute redirectTo="/admin/login">
                        <Produtos />
                    </PrivateRoute>
                }
                />

                <Route path="/admin/produtos/cadastrar" element={
                    <PrivateRoute redirectTo="/admin/login">
                        <ProdutoCadastrar />
                    </PrivateRoute>
                }
                />

                <Route path="/admin/produtos/editar/:idProduto" element={
                    <PrivateRoute redirectTo="/admin/login">
                        <ProdutoEditar />
                    </PrivateRoute>
                }
                />

                <Route
                    path="/admin/usuarios"
                    element={
                        <PrivateRoute redirectTo="/admin/login">
                            <Usuarios />
                        </PrivateRoute>
                    }
                />
                <Route path="/admin/usuarios/cadastrar" element={
                    <PrivateRoute redirectTo="/admin/login">
                        <UsuarioCadastrar />
                    </PrivateRoute>
                }
                />
                <Route path="/admin/usuarios/editar/:idUsuario" element={
                    <PrivateRoute redirectTo="/admin/login">
                        <UsuarioEditar />
                    </PrivateRoute>
                }
                />

            </Routes>
        </BrowserRouter>
    )
}

export default Router