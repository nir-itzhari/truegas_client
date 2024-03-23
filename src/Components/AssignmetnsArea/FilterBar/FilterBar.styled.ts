import styled from "styled-components";
import { Toolbar } from 'primereact/toolbar';

export const SearchToolBar = styled(Toolbar)<{ $isMobile: boolean }>`
    .p-toolbar-group-end.p-toolbar-group-right {
        margin: ${props => (props.$isMobile ? 'auto' : '0 0 0 16px')};
    }

    .p-toolbar-group-center {
        width: 35%;

        @media (max-width: 767px) {
            width: 100%;
            flex-direction: column !important;
        }
    }


    .p-toolbar-group-start.p-toolbar-group-left {
        gap: 5px !important;
    }
    
    @media (max-width: 767px) {
        .p-toolbar-group-start.p-toolbar-group-left {
            flex-direction: column !important;
            gap: 5px;


            .p-button {
                width: 100% !important;
                justify-content: center;
                background-color: #0c0c0c;
                border: none;
                text-decoration: none;
                color: #ef8e3c;

            }
        }

        
    }

    .css-1puturl-MuiDivider-root {
        width: 100%;
    }
    
`;
