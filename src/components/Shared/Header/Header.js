import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Doctors Portal</Link>
                    </Typography>
                    <Link to="/appointment" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Appointment</Button></Link>
                    {user ? <Box>
                        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Dashboard</Button></Link>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Box> : <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Login</Button></Link>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;