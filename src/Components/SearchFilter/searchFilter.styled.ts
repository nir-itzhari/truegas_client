import { TextField } from "@mui/material";
import styled from "styled-components";


export const searchWrapper = styled.form`
display: flex;
flex-direction: row;
`


export const TextAreaWrapper = styled.div`
margin: 10px 10px;
`


export const TextArea = styled(TextField)`


.css-e4w4as-MuiFormLabel-root-MuiInputLabel-root {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    padding: 0;
    position: relative;
    display: block;
    transform-origin: top right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 24px);
    position: absolute;
    right: 10%;
}


.css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    top: 0;
    right: 10%;
    transform-origin: top right;
    }

`