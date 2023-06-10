import { Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${bg})`,
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
            <Grid xs={12} md={6}>
                <Typography variant='h6'>
                    Appointment
                </Typography>
            </Grid>
        </Grid>
    );
};

export default AppointmentBanner;