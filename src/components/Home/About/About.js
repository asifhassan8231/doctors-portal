import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image from '../../../images/treatment.png';

const About = () => {
    return (
        <Container style={{ marginTop: '70px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ px: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={4} sm={4} md={5} >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <img src={image} alt="" style={{ width: '75%' }} />
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={7} style={{ paddingRight: '120px' }}>
                    <Typography variant="h4" sx={{ my: 2, fontWeight: 'bold' }}>Exceptional Dental Care, On your terms</Typography>
                    <Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda, libero ut laboriosam similique ducimus doloremque enim sapiente dolores atque corrupti iure. Porro quas dicta, accusantium dolorum quidem placeat repudiandae unde ea sit obcaecati veniam distinctio, ipsa amet. Dolores, placeat.</Typography>
                    <Button variant="contained" color="success" sx={{ my: 2 }}>Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;