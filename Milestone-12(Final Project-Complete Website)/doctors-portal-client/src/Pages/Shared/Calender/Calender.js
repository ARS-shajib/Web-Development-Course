import { DateCalendar, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                displayStaticWrapperAs='desktop'
            // value={date}
            // onChange={(newValue) => {
            //     setDate(newValue);
            // }}
            // renderInput={(props) => <TextField{...props} />}
            />
            {/* 
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DemoItem label="Controlled calendar">
                    <DateCalendar value={date} onChange={(newValue) => setDate(newValue)} />
                </DemoItem>
            </DemoContainer> */}
        </LocalizationProvider>
    );
};

export default Calender;