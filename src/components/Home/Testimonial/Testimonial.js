import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <Container>
            <Typography variant="h6" sx={{ mt: 5, color: 'success.main' }}>TESTIMONIALS</Typography>
            <Typography variant="h4" sx={{ my: 4 }}>What's Our Patients <br /> Says</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore obcaecati eligendi minima dolor, iusto cumque velit molestiae blanditiis eaque deleniti corrupti nobis ipsam facere placeat quia, voluptates magni illo.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <img src={people1} alt="" style={{ width: '50%' }} />
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ color: 'success.main' }}>Winson Henry</Typography>
                                <Typography variant="body2">California</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore obcaecati eligendi minima dolor, iusto cumque velit molestiae blanditiis eaque deleniti corrupti nobis ipsam facere placeat quia, voluptates magni illo.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <img src={people2} alt="" style={{ width: '50%' }} />
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ color: 'success.main' }}>Winson Henry</Typography>
                                <Typography variant="body2">California</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore obcaecati eligendi minima dolor, iusto cumque velit molestiae blanditiis eaque deleniti corrupti nobis ipsam facere placeat quia, voluptates magni illo.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box>
                                <img src={people3} alt="" style={{ width: '50%' }} />
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ color: 'success.main' }}>Winson Henry</Typography>
                                <Typography variant="body2">California</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonial;