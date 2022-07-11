import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImgAdmin from '../../../assets/img/GERAL.png'
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin'


const mdTheme = createTheme();

function DashboardContent() {

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>

                <MenuAdmin title={'Dashboard'} />

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
                            <img src={ImgAdmin} alt="Admin" />

                        </Grid>


                        <Footer sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}