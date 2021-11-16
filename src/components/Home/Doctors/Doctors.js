import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://salty-brook-32025.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])
    return (
        <Container>
            <h2>Our Doctors: {doctors.length}</h2>
            <Grid container spacing={2}>
                {
                    doctors.map(doctor => (
                        <Grid item xs={12} md={6} key={doctor._id}>
                            <img src={`data:image/jpeg;base64,${doctor.image}`} alt="" style={{ width: '50%' }} />
                            <h3>{doctor.name}</h3>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Doctors;