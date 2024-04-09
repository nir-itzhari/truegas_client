import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as styled from './addAssignment.styled';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FormControl, FormHelperText, InputAdornment, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ClientModel } from '../../../Models/ClientModel';
import AssignmentModel from '../../../Models/AssignmentModel';
import CustomizedCheckbox from './isDoneCheckbox';
import { Dayjs } from 'dayjs';
import { Button } from 'primereact/button';
import store from '../../../Redux/Store';
import UserModel from '../../../Models/UserModel';
import { Nullable } from 'primereact/ts-helpers';
import { IoMdArrowRoundForward } from "react-icons/io";
import { useMobile } from '../../../Hooks/useMobileHook';
import HeDatePicker from '../../SharedArea/HeDatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
import validateForms from '../../../Utils/formsValidations';
import assignmentService from '../../../Services/AssignmentServices';




export const AddAssignment = (): JSX.Element => {
    const data = useLoaderData() as ClientModel[]
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<AssignmentModel>({
        resolver: yupResolver(validateForms.addAssignmentFormSchema), mode: "onChange"
    });
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
            data.user_id = user._id
            data.date = chosenDate ?? new Date()
            data.isDone = chosenIsDone
            const addedAssignment = await assignmentService.addNewAssignment(data);

            navigate("..", { relative: 'path' })
            // console.log("Added assignment:", data);
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
                        <styled.TextAreaTitle
                            helperText={<FormHelperText sx={{ textAlign: 'right' }}>{errors.title?.message}</FormHelperText>}
                            error={errors.title?.message ? true : false}
                            dir={'rtl'}
                            fullWidth
                            label="סוג עבודה"
                            variant="standard" {...register('title')} />
                    </styled.FormGroup>

                    <styled.FormGroupDescription>
                        <styled.TextArea
                            helperText={<FormHelperText sx={{ textAlign: 'right' }}>{errors.description?.message}</FormHelperText>}
                            error={errors.description?.message ? true : false}
                            fullWidth
                            label="פירוט"
                            multiline
                            rows={4}
                            {...register('description')}
                        />
                    </styled.FormGroupDescription>

                    <styled.FormGroup>
                        <Select
                            fullWidth
                            value={client}
                            {...register('client_id')}
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
                        <styled.Input type="file" accept="image/gif, image/jpeg, image/png" name="imageFile" {...register('imageFile')} required/>
                    </styled.FormGroupFile>

                    <styled.FormGroup>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <styled.priceText
                                label='מחיר'
                                error={errors.price?.message ? true : false}
                                helperText={<FormHelperText sx={{ textAlign: 'right' }}>{errors.price?.message}</FormHelperText>}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">₪</InputAdornment>,
                                }}
                                {...register('price')}
                                variant="standard"
                            />
                        </FormControl>
                    </styled.FormGroup>


                    <styled.SubmitButtonWrapper>
                        <Button dir='rtl' label="שלח" icon="pi pi-check" loading={loading} />
                    </styled.SubmitButtonWrapper>
                </styled.Form>
            </styled.FormContainer>
        </styled.FormWrapper>
    );
};