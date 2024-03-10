import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Card } from 'primereact/card';
import config from '../../../Utils/Config';
import store from '../../../Redux/Store';
import axios from 'axios';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1234, 3245, 4434, 4566, 7676];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 5665, 6656, 3242, 1553, 8868];
const xLabels = [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר'
];

interface Income {
    month: string,
    totalIncome: number
}

export const AssignmentsIncomeChart = () => {
    const [assignmentsIncome, setAssignmentsIncome] = React.useState<number[]>()
    const [datesIncome, setDatesIncome] = React.useState<string[]>()

    const fetch = async () => {
        const user_id = store.getState().authState.user._id
        const income = await axios.get<Income[]>(config.assignmentsChartUrl + user_id)
        setAssignmentsIncome(income.data.map(i => i.totalIncome))
        setDatesIncome(income.data.map(i => i.month))

    }
    React.useEffect(() => {
        fetch()
    }, [])

    return (
        <React.Fragment>
            {assignmentsIncome && datesIncome && (
                <div style={{ direction: 'ltr', display: 'inline-grid', justifyContent: 'center' }}>
                    <Card style={{ borderRadius: '12px' }}>
                        <LineChart
                            width={500}
                            height={300}
                            series={[
                                { data: assignmentsIncome, label: 'הכנסות בש"ח' }
                            ]}
                            xAxis={[{ scaleType: 'point', data: datesIncome }]}
                        />
                    </Card>
                </div>
            )}
        </React.Fragment >
    );
}