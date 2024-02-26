import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { VscFlame } from "react-icons/vsc";
import './Header.css'

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
    const location = useLocation()
    const condition = ['/signin', '/signup', '/forgot-password', '/logout'].includes(location.pathname)
    const pages = !condition ? ['home', 'assignments', 'clients'] : [''];
    const homePage = !condition ? 'דף הבית' : ''
    const homePageTitle = !condition ? 'home' : '#'

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            <Typography variant="h6" sx={{ my: 2 }}>
                TrueGas
            </Typography>
            <Divider />
            <List>
                {pages.map((page, index) => (
                    <Link style={{ fontSize: '1.2rem' }} key={index} to={page}>{page === 'assignments' ? 'משימות' : homePage && page === 'clients' ? 'לקוחות' : homePage}</Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <AiOutlineMenuUnfold />
                    </IconButton>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <VscFlame fontSize={25} style={{ margin: '0 5px 6px 0' }} />
                        <Link to={homePageTitle} style={{ fontSize: '1.2rem' }}> TrueGas </Link>
                    </div>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {pages.map((page, index) => (
                            <Link style={{ fontSize: '1.2rem' }} key={index} to={page}>{page === 'assignments' ? 'משימות' : homePage && page === 'clients' ? 'לקוחות' : homePage}</Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}