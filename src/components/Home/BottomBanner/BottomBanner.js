import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const BottomBanner = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Paper sx={{ bgcolor: 'success.main', display: 'flex', p: 3, color: 'white', alignItems: 'center', gridColumnGap: '20px', marginTop: '-50px', height: '90px' }}>
                            <Box>
                                <AccessTimeIcon sx={{ fontSize: 50 }} />
                            </Box>
                            <Box>
                                <Typography variant="h5">Opening Hours</Typography>
                                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, possimus!</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Paper sx={{ bgcolor: 'primary.main', display: 'flex', p: 3, color: 'white', alignItems: 'center', gridColumnGap: '20px', marginTop: '-50px', height: '90px' }}>
                            <Box>
                                <AccessTimeIcon sx={{ fontSize: 50 }} />
                            </Box>
                            <Box>
                                <Typography variant="h5">Visit Our Location</Typography>
                                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Paper sx={{ bgcolor: 'success.main', display: 'flex', p: 3, color: 'white', alignItems: 'center', gridColumnGap: '20px', marginTop: '-50px', height: '90px' }}>
                            <Box>
                                <AccessTimeIcon sx={{ fontSize: 50 }} />
                            </Box>
                            <Box>
                                <Typography variant="h5">Contact Us Now!</Typography>
                                <Typography variant="body2">+8824232323</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default BottomBanner;