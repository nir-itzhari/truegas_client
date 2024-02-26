import * as styled from "./home.styled";
import imgSource from '../../../assets/2000_5d7e1564cdb7b.jpg';
import { ScrollTop } from 'primereact/scrolltop';

function Home(): JSX.Element {
    return (
        <>
            <styled.HomeContainer>
                <styled.BackgroundImage src={imgSource} alt="Background" />
                <styled.Overlay>
                    <styled.HomeText>
                        <div style={{ fontSize: '50px' }}>
                            TrueGas
                        </div>
                        <div>
                            המומחים שלך להתקנות גז ושירותים מקצועיים
                        </div>
                    </styled.HomeText>
                </styled.Overlay>
                <ScrollTop />
            </styled.HomeContainer>
        </>
    );
}

export default Home;
