import * as styled from './ImageTitle.styled'
import imgDashboardSVG from '../../../assets/Dashboard.svg'
import { useMobile } from '../../hooks/useMobileHook';

function ImageTitle(): JSX.Element {
    const isMobile = useMobile()
    return (
        <>
            <styled.HomeText>
                <styled.textHeader>
                    <img src={imgDashboardSVG} alt="dashboard" width='100%' height={isMobile ? 150 : 250} />
                </styled.textHeader>
            </styled.HomeText>
        </>
    );
}

export default ImageTitle;
