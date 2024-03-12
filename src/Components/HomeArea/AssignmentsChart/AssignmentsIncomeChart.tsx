import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Card } from 'primereact/card';
import config from '../../../Utils/Config';
import store from '../../../Redux/Store';
import axios from 'axios';
import { useMobile } from '../../hooks/useMobileHook';


interface Income {
    month: string,
    totalIncome: number
}

export const AssignmentsIncomeChart = () => {
    const [assignmentsIncome, setAssignmentsIncome] = React.useState<number[]>()
    const [datesIncome, setDatesIncome] = React.useState<string[]>()
    const isMobile = useMobile()

    const fetch = async () => {
        const user_id = store.getState().authState.user._id
        const income = await axios.get<Income[]>(config.assignmentsChartUrl + user_id)
        setAssignmentsIncome(income.data.map(i => i.totalIncome))
        setDatesIncome(income.data.map(i => i.month))

    }
    console.log(datesIncome, assignmentsIncome)
    React.useEffect(() => {
        fetch()
    }, [])

    return (
        <React.Fragment>
            {assignmentsIncome && datesIncome && (
                <div style={{ direction: 'ltr', display: 'inline-grid', justifyContent: 'center' }}>
                    <Card style={{ borderRadius: '12px' }}>
                        <LineChart
                            width={isMobile ? 320 : 800}
                            height={isMobile ? 200 : 300}
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