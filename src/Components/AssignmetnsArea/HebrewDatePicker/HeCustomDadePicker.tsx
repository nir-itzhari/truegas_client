import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { Nullable } from "primereact/ts-helpers";
import { useEffect, useState } from 'react';
import './HeCustomDadePicker.css'

interface Props {
    setChosenDate: (date: Nullable<Date>) => void
}



export default function HeCustomDatePicker({ setChosenDate }: Props) {
    const [date, setDate] = useState<Nullable<Date>>(new Date());
    const [currentDate] = useState<Nullable<Date>>(new Date());


    const handleChange = (e: any) => {
        e.preventDefault()
        setDate(e.target.value)
        setChosenDate(date)
    }

    addLocale('he', {
        firstDayOfWeek: 0,
        // showMonthAfterYear: true,
        dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
        dayNamesShort: ['ראש', 'שני', 'שלי', 'רבי', 'חמי', 'שיש', 'שבת'],
        dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
        monthNamesShort: ['ינואר', 'בפרואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
        today: 'היום',
        clear: 'נקה',
        cancel: 'ביטול'
    });

    useEffect(() => {

    }, [currentDate])

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} dateFormat="dd/mm/yy" onChange={handleChange} locale="he" />
        </div>
    )
}