import { LocalizationProvider, StaticDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Appointments from '../Appointments/Appointments';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
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
                <Container>
                    <Appointments date={date}></Appointments>
                </Container>
                <hr />
                <Link to="/appointment" style={{ textDecoration: 'none', color: 'green' }}><Button color="inherit">Make Appointment</Button></Link>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;