import * as styled from "./home.styled";
import imgSource from '../../../assets/2000_5d7e1564cdb7b.jpg';
import { ScrollTop } from 'primereact/scrolltop';
import { NavLink, useNavigate } from "react-router-dom";
import notify from "../../../Services/NotifyService";
import authService from "../../../Services/AuthServices";

function Home(): JSX.Element {
    const $screenWidth = window.innerWidth;
    console.log("Screen width: ", $screenWidth);




    return (
        <>
            <styled.HomeContainer>
                <styled.BackgroundImage $screenWidth={$screenWidth} src={imgSource} alt="Background" />
                <styled.Overlay>
                    <styled.HomeText>
                        <styled.textHeader>
                            TrueGas
                        </styled.textHeader>
                        <styled.textHeadLine>
                            המומחים שלך להתקנות גז ושירותים מקצועיים
                        </styled.textHeadLine>
                    </styled.HomeText>
                </styled.Overlay>
                <ScrollTop />
            </styled.HomeContainer>
        </>
    );
}

export default Home;
