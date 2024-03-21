import { AssignmentsIncomeChart } from "../../HomeArea/AssignmentsChart/AssignmentsIncomeChart";
import * as styled from "./home.styled";
import { ScrollTop } from 'primereact/scrolltop';
import { FC } from "react";
import ImageTitle from "../../HomeArea/ImageTitle/ImageTitle";

const Home: FC = (): JSX.Element => {

    return (
        <>
            <styled.HomeContainer>
                <styled.sectionOne />
                    <ImageTitle />
                    <styled.ChartWrapper>
                        <AssignmentsIncomeChart />
                    </styled.ChartWrapper>
                
            <ScrollTop />
        </styled.HomeContainer >
        </>
    );
}

export default Home;
