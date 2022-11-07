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
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import api from '../../../services/api';

import { useParams } from 'react-router-dom'



const mdTheme = createTheme();

export default function ProdutoEditar() {

    const [produto, setProduto] = React.useState('')
    const [descricao, setDescricao] = React.useState('')
    const [preco, setPreco] = React.useState('')
    const [qtd, setQtd] = React.useState('')

    const { idProduto } = useParams()

    React.useEffect(() => {
        async function getProduto() {
            const response = await api.get('http://localhost:5000/api/produtos.details/' + idProduto)

            setProduto(response.data.nome_produto);
            setDescricao(response.data.descricao_produto);
            setPreco(response.data.preco_produto);
            setQtd(response.data.qtd_produto);
        }
        getProduto()
    }, [])

    async function handleSubmit() {
        const data = {
            nome_produto: produto,
            descricao_produto: descricao,
            preco_produto: preco,
            qtd_produto: qtd,
            _id: idProduto
        }



        if (produto !== '' && descricao !== '' && preco !== '' && qtd !== '') {
            const response = await api.put('http://localhost:5000/api/produtos', data)

            if (response.status === 200) {
                window.location.href = '/admin/produtos'
            } else {
                alert('Error ao atualizar o produto')
            }
        } else {
            alert('Preencha todos os dados!')
        }
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <MenuAdmin title={'Produtos'} />

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
                                        height: 300,
                                    }}
                                >
                                    <h2>Atualização de Produtos</h2>
                                    <Grid container spacing={3}>

                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                required
                                                id="produto"
                                                name="produto"
                                                label="Produto"
                                                fullWidth
                                                autoComplete="produto"
                                                variant="standard"
                                                value={produto}
                                                onChange={e => setProduto(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="descricao"
                                                name="descricao"
                                                label="Descricao"
                                                fullWidth
                                                autoComplete="descricao"
                                                variant="standard"
                                                value={descricao}
                                                onChange={e => setDescricao(e.target.value)}
                                            />
                                        </Grid>

                                        {/* <Grid item xs={12} sm={3}>
                                            <FormControl variant="standard" fullWidth>
                                                <InputLabel id="labelTipo">Perfil</InputLabel>
                                                <Select
                                                    labelId="labelTipo"
                                                    id="tipo"
                                                    value={tipo}
                                                    onChange={e => setTipo(e.target.value)}
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
                                        </Grid> */}

                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                type="number"
                                                required
                                                id="qtd"
                                                name="qtd"
                                                label="Qtd"
                                                fullWidth
                                                autoComplete="qtd"
                                                variant="standard"
                                                value={qtd}
                                                onChange={e => setQtd(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                type="number"
                                                required
                                                id="preco"
                                                name="preco"
                                                label="Preco"
                                                fullWidth
                                                autoComplete="preco"
                                                variant="standard"
                                                value={preco}
                                                onChange={e => setPreco(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12}>
                                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                                Atualizar
                                            </Button>
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