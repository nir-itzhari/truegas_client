import styled from "styled-components";
import { Toolbar } from 'primereact/toolbar';

export const SearchToolBar = styled(Toolbar) <({ $isMobile: boolean }) >`
    .p-toolbar-group-end.p-toolbar-group-right {
        margin: ${props => props.$isMobile ? 'auto' : '0 0 0 16px'};
    }
`