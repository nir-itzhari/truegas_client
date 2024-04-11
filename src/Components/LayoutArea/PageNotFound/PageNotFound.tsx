import * as styled from "./PageNotFound.styled";

function PageNotFound(): JSX.Element {
    return (
        <styled.backContainer>
            Page Not Found return to <styled.backToHome to="/dashboard">Dashboard</styled.backToHome>
        </styled.backContainer>
    );
}

export default PageNotFound;
