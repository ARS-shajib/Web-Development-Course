import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '07.00 AM - 08.00 AM',
        space: 15,
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 7,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 8,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 9,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 10,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 11,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 12,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    }
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography sx={{ color: 'info.main', my: 2 }} variant='h5'>Available Appointment on {date.toString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;