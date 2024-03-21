import styled from "styled-components";
import { CSVLink } from 'react-csv';
import { LuDownload } from "react-icons/lu";



export const CSVButton = styled(CSVLink)`

`

export const downloadIcon = styled(LuDownload)`
    color: black;
    font-size: 25px;
    transition: 300ms ease;

    &:hover {
        color: blue;
    }
` 