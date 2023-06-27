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


// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// export default function ResponsiveDatePickers() {
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer
//                 components={[
//                     'DatePicker',
//                     'MobileDatePicker',
//                     'DesktopDatePicker',
//                     'StaticDatePicker',
//                 ]}
//             >
//                 {/* <DemoItem label="Desktop variant">
//                     <DesktopDatePicker defaultValue={dayjs()} />
//                 </DemoItem>
//                 <DemoItem label="Mobile variant">
//                     <MobileDatePicker defaultValue={dayjs()} />
//                 </DemoItem> */}
//                 {/* <DemoItem label="Responsive variant">
//                     <DatePicker defaultValue={dayjs('2022-04-17')} />
//                 </DemoItem> */}
//                 {/* <DemoItem label="Static variant"> */}
//                 <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
//                 {/* </DemoItem> */}
//             </DemoContainer>
//         </LocalizationProvider>
//     );
// }