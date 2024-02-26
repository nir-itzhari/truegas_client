import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const backContainer = styled.div`
    margin: 10% 0;
    text-align: center;
`

export const backToHome = styled(Link)`
    color: black;
    text-decoration: underline;


    &:hover {
        color: royalblue;
    }

    &:active {
        color: blue;
    }
`;
