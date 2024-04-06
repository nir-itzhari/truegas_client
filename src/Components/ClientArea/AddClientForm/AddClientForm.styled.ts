import { Button } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FormContainer = styled.div`
  direction: rtl;
  width: 400px;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const CitySelect = styled(Autocomplete)`
.css-p1olib-MuiAutocomplete-endAdornment {
  left: 0 !important;
}

.css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root {
  right: 0 !important;
  transform-origin: top right !important;

}

.css-1c2i806-MuiFormLabel-root-MuiInputLable-root {
  ransform-origin: top right !important;
  right: 0 !important;
}
`

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: calc(100% - 20px); /* Adjusted width to accommodate padding */
  padding: 10px; /* Reduced padding */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px; /* Reduced border-radius */
`;

export const TextArea = styled.textarea`
  width: calc(100% - 20px); /* Adjusted width to accommodate padding */
  padding: 10px; /* Reduced padding */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px; /* Reduced border-radius */
  resize: vertical;
`;

export const Select = styled.select`
  width: 100%; /* Adjusted width to accommodate padding */
  padding: 20px; /* Reduced padding */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px; /* Reduced border-radius */
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

export const SubmitButton = styled(Button)`
  width: 80%;
  font-size: 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;