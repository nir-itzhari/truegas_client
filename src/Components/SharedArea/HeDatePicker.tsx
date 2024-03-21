import React, { FC } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/he'; // Import the Hebrew locale
import './HeDatePicker.css'
import { Nullable } from "primereact/ts-helpers";

dayjs.locale('he');


interface Props {
    setChosenDate: (date: Nullable<Dayjs>) => void
}


const HeDatePicker: FC<Props> = (args): JSX.Element => {
    const [value, setValue] = React.useState(dayjs());

    const handleDateChange = (newValue: Dayjs) => {
        setValue(newValue)
        args.setChosenDate(newValue)
    }
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="בחר תאריך"
                    value={value}
                    onChange={(newValue) => handleDateChange(newValue)} />
            </LocalizationProvider>
        </>
    );
}

export default HeDatePicker;
