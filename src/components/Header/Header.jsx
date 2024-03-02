import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import NavBar from '../NavBar/NavBar';
import MedicationIcon from '@mui/icons-material/Medication';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MedicationIcon
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    />
                    <Link to="/">Pharma Point</Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <NavBar />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
