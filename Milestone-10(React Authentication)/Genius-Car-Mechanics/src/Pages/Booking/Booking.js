import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://genius-car-mechanic-server-b262f7m1z-ars-shajib.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h2>This is Booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;