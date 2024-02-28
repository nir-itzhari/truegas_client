import { TextField } from "@mui/material";
import styled from "styled-components";


export const formGroupWrapper = styled.div`
.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 25px !important;
}

.css-11lq3yg-MuiGrid-root {
    height: 100%;
}
`



export const inputWrapper = styled(TextField)`
.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    direction: rtl !important;
    right: 30px !important;
    transform-origin: top right !important;
}

.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    direction: rtl;
}

.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    direction: rtl !important;
}

.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
    direction: rtl !important;
    right: 30px !important;
    transform-origin: top right !important;
}
.css-1d3z3hw-MuiOutlinedInput-notchedOutline{
    text-align: right !important;
}
`