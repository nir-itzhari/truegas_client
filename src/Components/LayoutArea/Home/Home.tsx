import { Divider } from "primereact/divider";
import { AssignmentsIncomeChart } from "../../HomeArea/AssignmentsChart/AssignmentsIncomeChart";
import * as styled from "./home.styled";
import { ScrollTop } from 'primereact/scrolltop';

const Home = (): JSX.Element => {

    return (
        <>
            <styled.HomeContainer>
                <styled.HomeText>
                    <styled.textHeader>
                        TrueGas
                    </styled.textHeader>
                </styled.HomeText>
                <div style={{ textAlign: 'center' }}>
                    <AssignmentsIncomeChart />
                </div>
                <Divider align="center" type="solid">
                    <span>משימות לביצוע</span>
                </Divider>
                <ScrollTop />
            </styled.HomeContainer>
        </>
    );
}

export default Home;
