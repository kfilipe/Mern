import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import ImgAdmin from '../../../assets/img/GERAL.png'
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin'
import { FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';



const mdTheme = createTheme();

function UsuarioCadastrar() {

    // const [age, setAge] = useState('');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value);
    // };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <MenuAdmin title={'Usuários'} />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        {/* Usar a Grid abaixo para inserção de dados */}

                        <Grid container spacing={3}>
                            <Grid item sm={12}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <h2>Cadastro de Usuários</h2>
                                    <Grid container spacing={3}>

                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                required
                                                id="nome"
                                                name="nome"
                                                label="Nome Completo"
                                                fullWidth
                                                autoComplete="nome"
                                                variant="standard"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="email"
                                                name="email"
                                                label="Email"
                                                fullWidth
                                                autoComplete="email"
                                                variant="standard"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={3}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel id="labelTipo">Perfil</InputLabel>
                                                <Select
                                                    labelId="labelTipo"
                                                    id="tipo"
                                                    // value={age}
                                                    // onChange={handleChange}
                                                    label="Perfil"
                                                >
                                                    <MenuItem value="">
                                                        <em>Escolha um perfil</em>
                                                    </MenuItem>
                                                    <MenuItem value={1}>Administrador</MenuItem>
                                                    <MenuItem value={2}>Funcionário</MenuItem>
                                                    <MenuItem value={3}>Gerente</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                type="password"
                                                required
                                                id="senha"
                                                name="senha"
                                                label="Senha"
                                                fullWidth
                                                autoComplete="senha"
                                                variant="standard"
                                            />
                                        </Grid>

                                    </Grid>
                                </Paper>
                            </Grid>

                        </Grid>


                        <Footer sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <UsuarioCadastrar />;
}