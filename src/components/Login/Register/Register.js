import { Alert, Button, Container, Grid, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, loading, user, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not matched');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid sx={{ mt: 8 }} item xs={4} sm={8} md={6}>
                        <Typography variant="h4" sx={{ textAlign: 'center' }}>
                            Register
                        </Typography>

                        {!loading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '1', m: 1 }}
                                id="outlined-required"
                                label="Your Name"
                                type="text"
                                size="small"
                                name="name"
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <TextField
                                sx={{ width: '1', m: 1 }}
                                id="outlined-required"
                                label="Your Email"
                                type="email"
                                size="small"
                                name="email"
                                onBlur={handleOnBlur}
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
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '1', m: 1 }}
                                id="outlined-password-input"
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                size="small"
                                name="password2"
                                onBlur={handleOnBlur}
                            />
                            <NavLink to="/login" style={{ textDecoration: "none" }} >
                                <Typography variant="body2"
                                    sx={{ width: '1', ml: 1, color: 'success.main' }}>Already Registered? Please Login</Typography>
                            </NavLink>
                            <Button sx={{ width: '1', ml: 1, mt: 2 }} variant="contained" color="success" type="submit" >Register</Button>
                        </form>}
                        {loading && <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>}
                        {user &&
                            <Alert severity="success">Registration Successful!</Alert>}
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

export default Register;