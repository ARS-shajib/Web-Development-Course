import { DateCalendar, LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

const Calender = ({ date, setDate }) => {

    const handleDateChange = (date1) => {
        setDate(date1);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DatePicker
                label="Select a date"
                value={setDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
            /> */}
            <StaticDatePicker
                displayStaticWrapperAs='desktop'
                value={setDate}
                onChange={
                    handleDateChange
                }
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