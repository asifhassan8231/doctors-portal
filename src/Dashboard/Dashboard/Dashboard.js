import { AppBar, Button, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Appointments from '../Appointments/Appointments';
import { Link } from 'react-router-dom';
const drawerWidth = 220;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [date, setDate] = React.useState(new Date());

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar >

            </Toolbar>
            <Divider />
            <List>
                {['Dashboard', 'Appointment', 'Patients', 'Prescriptions'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}>

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    openTo="day"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Appointments date={date}></Appointments>
                        <hr />
                        <Link to="/appointment" style={{ textDecoration: 'none', color: 'green' }}><Button color="inherit">Make Appointment</Button></Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;