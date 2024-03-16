import * as React from 'react';
import * as styled from './Navbar.styled'
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
import AuthMenu from '../../AuthArea/Auth/AuthMenu/AuthMenu';
import './Header.css'

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

interface RoutePaths {
    [key: string]: string;
}

const routePaths: RoutePaths = {
    home: '/dashboard',
    assignments: '/assignments',
    clients: '/clients',
    forms: '/forms',
};

export default function DrawerAppBar(props: Props) {
    const location = useLocation();
    const condition = ['/signin', '/signup', '/forgot-password', '/logout'].includes(location.pathname);
    const pages = !condition ? ['dashboard', 'assignments', 'clients', 'forms'] : [''];
    const homePageTitle = !condition ? 'dashboard' : '#'
    const homePage = !condition ? 'Dashboard' : '';
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
                    <Link style={{ fontSize: '1.2rem' }} key={index} to={routePaths[page]}>{page === 'assignments' ? 'משימות' : page === 'clients' ? 'לקוחות' : page === 'forms' ? 'טפסים' : homePage}</Link>
                ))}
                <AuthMenu />
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
                    <styled.homePageTitle>
                        <styled.flameIcon />
                        <Link to={homePageTitle}> TrueGas </Link>
                    </styled.homePageTitle>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {pages.map((page, index) => (
                            <Link style={{ fontSize: '1.2rem' }} key={index} to={routePaths[page]}>{page === 'assignments' ? 'משימות' : page === 'clients' ? 'לקוחות' : page === 'forms' ? 'טפסים' : homePage}</Link>
                        ))}
                        <AuthMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <styled.drawerWrapper>
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
            </styled.drawerWrapper>
        </Box>
    )
}