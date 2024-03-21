import React, { FC } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRange } from '@mui/x-date-pickers-pro';
import 'dayjs/locale/he';
import './HeDateRangePicker.css'

dayjs.locale('he');



const HeDateRangePicker: FC = (): JSX.Element => {
    const [value, setValue] = React.useState<DateRange<Dayjs>>([dayjs(), dayjs()]);
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                    format="DD/MM/YYYY"
                    value={value}
                    defaultValue={[dayjs(), dayjs()]}
                    onChange={(newValue) => setValue(newValue)}
                    localeText={{ start: 'מתאריך', end: 'עד תאריך' }} />
            </LocalizationProvider>
        </>
    );
}

export default HeDateRangePicker;
