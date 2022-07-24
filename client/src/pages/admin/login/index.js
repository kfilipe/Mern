import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { setNomeUsuario, login, setIdUsuario, setTipoUsuario } from '../../../services/auth';
import api from '../../../services/api';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                MERN
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {

    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    // const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    async function handleSubmit() {
        await api.post('http://localhost:5000/api/usuarios/login', { email, senha })
            .then(res => {
                if (res.status === 200) {
                    if (res.data.status === 1) {
                        login(res.data.token);
                        setIdUsuario(res.data.id_client);
                        setNomeUsuario(res.data.user_name);
                        setTipoUsuario(res.data.user_type);

                        window.location.href = '/admin'
                    } else if (res.data.status === 2) {
                        alert('Atenção: ' + res.data.error);
                    }
                    setLoading(false);
                } else {
                    alert('Erro no servidor');
                    setLoading(false);
                }
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Digite seu email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Digite sua senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Entrar
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}