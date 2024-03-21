import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as styled from './addAssignment.styled';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ClientModel } from '../../../Models/ClientModel';
import AssignmentModel from '../../../Models/AssignmentModel';
import CustomizedCheckbox from './isDoneCheckbox';
import { Dayjs } from 'dayjs';
import { Button } from 'primereact/button';
import store from '../../../Redux/Store';
import UserModel from '../../../Models/UserModel';
import { Nullable } from 'primereact/ts-helpers';
import { IoMdArrowRoundForward } from "react-icons/io";
import { useMobile } from '../../hooks/useMobileHook';
import { InputNumber } from "primereact/inputnumber";
import HeDatePicker from '../../SharedArea/HeDatePicker';





export const AddAssignment = () => {
    const data = useLoaderData() as ClientModel[]
    const { register, handleSubmit } = useForm<AssignmentModel>();
    const [clients] = useState<ClientModel[]>(data);
    const [loading, setLoading] = useState<boolean>(false)
    const [client, setClient] = useState<string>('בחר לקוח')
    const [chosenDate, setChosenDate] = useState<Nullable<Dayjs>>()
    const [chosenIsDone, setChosenIsDone] = useState<Nullable<boolean>>()
    const [price, setPrice] = useState<Nullable<number>>(0)

    const [user, setUser] = useState<UserModel>(null);
    const navigate = useNavigate()
    const isMobile = useMobile()

    const setIsDone = (isDone: Nullable<boolean>) => setChosenIsDone(isDone)
    const setDate = (date: Nullable<Dayjs>) => setChosenDate(date)

    const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
        try {
            setLoading(!loading)
            data.client_id = client;
            data.user_id = user._id
            data.date = chosenDate ?? new Date()
            data.isDone = chosenIsDone
            data.price = price
            // const addedAssignment = await assignmentService.addNewAssignment(data);

            navigate("..", { relative: 'path' })
            console.log("Added assignment:", data);
        } catch (error) {
            setLoading(!loading)
            console.error("Error adding assignment:", error);
        }
    };

    const handleClientChange = (event: SelectChangeEvent) => {
        setClient(event.target.value);
    };


    useEffect(() => {

        setUser(store.getState().authState.user);

        const unSubscribeMe = store.subscribe(() => {
            setUser(store.getState().authState.user);
        })

        return () => unSubscribeMe()

    }, []);



    return (
        <styled.FormWrapper>
            <styled.backButtonWrapper onClick={() => navigate('..', { relative: 'path' })}>
                <IoMdArrowRoundForward fontSize={isMobile ? 30 : 40} />
                <styled.backButtonText>חזור</styled.backButtonText>
            </styled.backButtonWrapper>
            <styled.FormContainer>
                <div>
                    <styled.FormTitle>הוספת משימה</styled.FormTitle>
                </div>
                <styled.Form onSubmit={handleSubmit(onSubmit)}>
                    <styled.FormGroup>
                        <styled.DateWrapper>
                            {/* <styled.DateLabel>בחר תאריך:</styled.DateLabel>
                            <HeCustomDatePicker setChosenDate={setDate} /> */}
                            <HeDatePicker setChosenDate={setDate} />
                        </styled.DateWrapper>
                    </styled.FormGroup>

                    <styled.FormGroup>
                        <styled.TextAreaTitle dir={'rtl'} fullWidth={true} id="standard-basic" label="סוג עבודה" variant="standard" {...register('title')} required />
                    </styled.FormGroup>

                    <styled.FormGroupDescription>
                        <styled.TextArea
                            fullWidth={true}
                            id="outlined-multiline-static"
                            label="פירוט"
                            multiline
                            rows={4}
                            {...register('description')}
                        />
                    </styled.FormGroupDescription>

                    <styled.FormGroup>
                        <Select
                            fullWidth={true}
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={client}
                            onChange={handleClientChange}>
                            <MenuItem value="בחר לקוח" disabled={true}>
                                <em>בחר לקוח</em>
                            </MenuItem>
                            {clients && clients.map((clientOption, index) => (
                                <MenuItem key={index} value={clientOption._id}>{clientOption.fullName}</MenuItem>
                            ))}
                        </Select>
                    </styled.FormGroup>
                    <styled.FormGroupCheckBox>
                        <CustomizedCheckbox setIsDone={setIsDone} />
                    </styled.FormGroupCheckBox>
                    <styled.FormGroupFile>
                        <styled.Input type="file" name="image" {...register('imageFile')} required />
                    </styled.FormGroupFile>

                    <styled.FormGroup>
                        <InputNumber value={price} onValueChange={(e) => setPrice(e.value)} minFractionDigits={2} maxFractionDigits={5} />

                        {/* <styled.TextAreaTitle
                            type='number'
                            dir={'rtl'}
                            fullWidth={true}
                            id="standard-basic"
                            label="מחיר"
                            variant="standard"
                            {...register('price')} inputMode="numeric"
                            min="0"
                            step="0.01"
                            required /> */}
                    </styled.FormGroup>


                    <styled.SubmitButtonWrapper>
                        <Button dir='rtl' label="שלח" icon="pi pi-check" loading={loading} />
                    </styled.SubmitButtonWrapper>
                </styled.Form>
            </styled.FormContainer>
        </styled.FormWrapper>
    );
};