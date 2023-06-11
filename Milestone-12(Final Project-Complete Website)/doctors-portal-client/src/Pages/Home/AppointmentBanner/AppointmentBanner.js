import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Grid style={appointmentBanner} container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={12} md={6}>
                <img
                    style={{ width: 400, marginTop: '-100px' }}
                    src={doctor} alt="" />
            </Grid>
            <Grid xs={12} md={6} sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'left'
            }}>
                <Box>
                    <Typography variant='h6' sx={{ mb: 5 }} style={{ color: '#22A4B6' }}>
                        Appointment
                    </Typography>
                    <Typography variant='h4' style={{ color: 'white' }}>
                        Make an Appointment Today
                    </Typography>
                    <Typography variant='h6' sx={{ my: 5 }} style={{
                        color: 'white', fontSize: 14, fontWeight: 300
                    }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae a quo doloremque quaerat. Cupiditate quas laudantium molestiae minima tempora molestias.
                    </Typography>
                    <Button variant='contained' style={{ backgroundColor: '#22A4B6' }}>Learn More</Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AppointmentBanner;