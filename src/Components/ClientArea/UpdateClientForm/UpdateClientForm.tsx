import * as styled from './UpdateClientForm.styled';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { israel_cities } from '../../../Utils/data';
import { TextField } from '@mui/material';
import clientService from '../../../Services/ClientService';
import Autocomplete from '@mui/material/Autocomplete';
import { IoMdSend } from "react-icons/io";
import { useParams } from 'react-router-dom';


export const UpdateClientFrom = () => {
    const params = useParams()
    const { clientId } = params
    const { register, handleSubmit, setValue } = useForm();
    const [cities] = useState<string[]>(israel_cities)
    const [newCityValue, setNewCityValue] = useState<string>(null)
    const [currentCityValue, setCurrentCityValue] = useState<string>(null)


    const onSubmit = async (client: any) => {
        client.city = newCityValue
        client.assignment_id = []
        if (client) {
            const addedClient = await clientService.addNewClient(client)
            console.log(addedClient);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientToUpdate = await clientService.getOneClient(clientId)
                if (clientToUpdate) {
                    Object.entries(clientToUpdate).map(([key, value]) => (
                        setValue(`${key}`, value)
                    ))
                    setCurrentCityValue(clientToUpdate.city)
                }
            } catch (error: any) {
                console.log(error.message)
            }
        };

        fetchData();
    }, [clientId, setValue]);




    const defaultProps = {
        options: cities,
        getOptionLabel: (option: string) => option
    };


    return (
        <styled.FormWrapper>
            <styled.FormContainer>
                <styled.FormTitle>עדכון פרטי לקוח</styled.FormTitle>
                <styled.Form onSubmit={handleSubmit(onSubmit)}>
                    <styled.FormGroup>
                        <TextField dir={'rtl'} fullWidth={true} id="standard-basic" label="שם מלא" variant="standard" {...register('fullName')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <Autocomplete {...defaultProps}
                            dir='rtl'
                            blurOnSelect
                            isOptionEqualToValue={(option, value) => option === value}
                            onChange={(e, newValue) => { setNewCityValue(newValue) }}
                            disablePortal
                            value={!newCityValue && currentCityValue}
                            renderInput={(params) => (
                                <TextField {...params} label="בחר עיר" autoComplete='on' variant="standard" />
                            )}
                        />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <TextField dir={'rtl'} fullWidth={true} id="standard-basic" label="רחוב" variant="standard" {...register('street')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <TextField dir={'rtl'} fullWidth={true} id="standard-basic" label="מספר בית" variant="standard" {...register('buildingNumber')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <TextField dir={'rtl'} fullWidth={true} id="standard-basic" label="מספר דירה" variant="standard" {...register('apartmentNumber')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <TextField dir={'rtl'} fullWidth={true} id="standard-basic" label="קומה" variant="standard" {...register('floor')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.FormGroup>
                        <TextField dir={'rtl'} fullWidth={true} id="standard-basic" label="נייד" variant="standard" {...register('phoneNumber')} autoComplete='off' required />
                    </styled.FormGroup>
                    <styled.submitButtonWrapper>
                        <styled.SubmitButton dir='ltr' type="submit" variant="contained" endIcon={<IoMdSend />}>הוסף</styled.SubmitButton>
                    </styled.submitButtonWrapper>
                </styled.Form>
            </styled.FormContainer>
        </styled.FormWrapper>
    );
};