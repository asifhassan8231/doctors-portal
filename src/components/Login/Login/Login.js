import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, loading, user, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid sx={{ mt: 8 }} item xs={4} sm={8} md={6}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}>
                            Login
                        </Typography>
                        {!loading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                required
                                sx={{ width: '1', m: 1 }}
                                id="outlined-required"
                                label="Your Email"
                                type="email"
                                size="small"
                                name="email"
                                onChange={handleOnChange}
                            />
                            <br />
                            <TextField
                                sx={{ width: '1', m: 1 }}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                size="small"
                                name="password"
                                onChange={handleOnChange}
                            />
                            <NavLink to="/register" style={{ textDecoration: "none" }} >
                                <Typography variant="body2"
                                    sx={{ width: '1', ml: 1, color: 'success.main' }}>New User? Please Register</Typography>
                            </NavLink>
                            <Button sx={{ width: '1', ml: 1, mt: 2 }} variant="contained" color="success" type="submit" >Login</Button>
                        </form>}
                        <hr />
                        <Button sx={{ width: '1', ml: 1, mt: 1 }} variant="outlined" color="success" type="submit" onClick={handleGoogleSignIn} >Continue With Google</Button>
                        {loading && <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>}
                        {user &&
                            <Alert severity="success">Login Successful!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={4} sm={8} md={6}>
                        <img style={{ width: '100%' }} src={login} alt=""></img>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;