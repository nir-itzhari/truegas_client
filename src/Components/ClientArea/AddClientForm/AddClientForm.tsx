import * as styled from './AddClientForm.styled';
import * as Styled from '../../AssignmetnsArea/AddAssignmentForm/addAssignment.styled';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { israel_cities } from '../../../Utils/data';
import { TextField } from '@mui/material';
import clientService from '../../../Services/ClientService';
import Autocomplete from '@mui/material/Autocomplete';
import { IoMdSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useMobile } from '../../../Hooks/useMobileHook';
import notify from '../../../Services/NotifyService';



export const AddClientFrom = () => {
    const { register, handleSubmit } = useForm();
    const [cities] = useState<string[]>(israel_cities)
    const [newCityValue, setNewCityValue] = useState<string>(null)
    const navigate = useNavigate()
    const isMobile = useMobile()

    const onSubmit = async (client: any) => {
        if (client) {
            try {
                client.city = newCityValue
                client.assignment_id = []
                const addedClient = await clientService.addNewClient(client)
                if (addedClient) {
                    notify.success("New Vacation Added")
                    navigate('/clients')
                }


            } catch (error: any) {
                console.log(error.message);
            }
        }
    };


    const defaultProps = {
        options: cities,
        getOptionLabel: (option: string) => option
    };


    return (
        <styled.FormWrapper>
            <styled.FormContainer>
                <styled.FormTitle>הוספת לקוח</styled.FormTitle>
                <styled.Form onSubmit={handleSubmit(onSubmit)}>
                    <styled.FormGroup>
                        <Styled.TextArea dir={'rtl'} fullWidth={true} id="standard-basic" label="שם מלא" variant="standard" {...register('fullName')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <Autocomplete {...defaultProps}
                            dir='rtl'
                            blurOnSelect
                            isOptionEqualToValue={(option, value) => option === value}
                            onChange={(e, newValue) => { setNewCityValue(newValue) }}
                            disablePortal
                            value={newCityValue}
                            renderInput={(params) => (
                                <TextField {...params} label="בחר עיר" autoComplete='on' variant="standard" />
                            )}
                        />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <Styled.TextArea dir={'rtl'} fullWidth={true} id="standard-basic" label="רחוב" variant="standard" {...register('street')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <Styled.TextArea dir={'rtl'} fullWidth={true} id="standard-basic" label="מספר בית" variant="standard" {...register('buildingNumber')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <Styled.TextArea dir={'rtl'} fullWidth={true} id="standard-basic" label="מספר דירה" variant="standard" {...register('apartmentNumber')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <Styled.TextArea dir={'rtl'} fullWidth={true} id="standard-basic" label="קומה" variant="standard" {...register('floor')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <Styled.TextArea dir={'rtl'} fullWidth={true} id="standard-basic" label="נייד" variant="standard" {...register('phoneNumber')} autoComplete='off' required />
                    </styled.FormGroup>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <styled.SubmitButton dir='ltr' type="submit" variant="contained" endIcon={<IoMdSend />}>הוסף</styled.SubmitButton>
                    </div>
                </styled.Form>
            </styled.FormContainer>
        </styled.FormWrapper>
    );
};