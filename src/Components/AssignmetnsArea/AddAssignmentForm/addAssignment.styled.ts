import { Button, TextField } from "@mui/material";
import styled from "styled-components";


export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const backButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
`

export const backButtonText = styled.span`
  font-size: 15px;
  font-weight: 600;
`


export const FormContainer = styled.div`
  direction: rtl;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
display: grid;
grid-template-columns: repeat(2, 2fr);
align-items: center;

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: unset;
}
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const DateWrapper = styled.div`
  direction: rtl;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const DateLabel = styled.span`
  font-size: 1.1rem; 
  font-weight: 700;
`

export const FormGroupDescription = styled.div`
  margin-bottom: 20px;
  grid-column: span 2;
`;

export const FormGroupCheckBox = styled.div`
margin-bottom: 20px;
display: flex; 
justify-content: center;
@media (max-width: 768px) {
  justify-content: flex-start;
}
`

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: calc(100% - 20px); 
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px; 
  background-color: #ccc;

  #file-upload-button {
    border-radius: 25px;
  }
`;
export const TextAreaTitle = styled(TextField)`
  width: calc(100% - 20px); 
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px; 
  resize: vertical;

  .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root {
    right: 0 !important;
    transform-origin: top right !important;
  }
   .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    transform-origin: top right !important;
    right: 0 !important; 
    direction: rtl;
   }

   .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root { 
    transform-origin: top right !important;
    right: 29px !important;
    direction: rtl;
    z-index: 0; 
   }
   .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    text-align: right !important;
   }
   .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused { 
    transform-origin: top right !important;
    right: 29px !important; 
    
   }
   
`;

export const TextArea = styled(TextField)`
  width: calc(100% - 20px); 
  padding: 10px; /* Reduced padding */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px; 
  resize: vertical;

  .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root {
    right: 0 !important;
    transform-origin: top right !important;
  }
   .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    transform-origin: top right !important;
    right: 0 !important; 
    direction: rtl;
   }

   .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root { 
    transform-origin: top right !important;
    right: 29px !important;
    direction: rtl;
    z-index: 0; 
   }
   .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    text-align: right !important;
   }
   .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused { 
    transform-origin: top right !important;
    right: 29px !important; 
    
   }
   
`;


export const priceText = styled(TextField)`
.css-1c2i806-MuiFormLabel-root-MuiInputLabel-root {
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 1rem;
  padding: 0;
  position: relative;
  display: block;
  transform-origin: top left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 133%;
  position: absolute;
  left: 90% !important;
  top: 0;
  }
`;


export const Select = styled.select`
  width: 100%;
  padding: 20px; 
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const Option = styled.option`
  font-size: 16px;
`;

export const FormGroupFile = styled.div`
text-align: center;
.p-button { 
gap: 5px;
}

.p-button .p-button-icon-left {
  margin-right: 0;
}

`
export const SubmitButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`

export const SubmitButton = styled(Button)`
  width: 80%;
  font-size: 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
