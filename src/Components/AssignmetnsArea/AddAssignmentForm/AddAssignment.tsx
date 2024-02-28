import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as styled from './addAssignment.styled';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { ClientModel } from '../../../Models/ClientModel';
import AssignmentModel from '../../../Models/AssignmentModel';
import { IoMdSend } from 'react-icons/io';
import HDatePicker from '../HebrewDatePicker/HebrewDatePicker';
import assignmentService from '../../../Services/AssignmentServices';
import CustomizedCheckbox from './isDoneCheckbox';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import HeCustomDatePicker from '../HebrewDatePicker/HeCustomDadePicker';
import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import store from '../../../Redux/Store';
import notify from '../../../Services/NotifyService';
import UserModel from '../../../Models/UserModel';
import { Nullable } from 'primereact/ts-helpers';





export const AddAssignment = () => {
    const data = useLoaderData() as ClientModel[]
    const { register, handleSubmit } = useForm<AssignmentModel>();
    const [clients] = useState<ClientModel[]>(data);
    const [loading, setLoading] = useState<boolean>(false)
    const [client, setClient] = useState<string>('בחר לקוח')
    const [chosenDate, setChosenDate] = useState<Nullable<Date>>()
    // const [imagesFiles, setImagesFiles] = useState<FileUploadSelectEvent>()
    const [user, setUser] = useState<UserModel>(null);

    const navigate = useNavigate()

    const setDate = (date: Nullable<Date>) => setChosenDate(date)

    const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
        try {
            setLoading(!loading)
            data.client_id = client;
            data.user_id = user._id
            data.date = dayjs(chosenDate).format('DD-MM-YYYY')
            // data.imageFile = imagesFiles
            const addedAssignment = await assignmentService.addNewAssignment(data);
            navigate('/assignments')
            console.log("Added assignment:", addedAssignment);
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
            <div></div>
            <styled.FormContainer>
                <div>
                    <styled.FormTitle>הוספת משימה</styled.FormTitle>
                </div>
                <styled.Form onSubmit={handleSubmit(onSubmit)}>
                    <styled.FormGroup>
                        <div style={{ direction: 'rtl', textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>בחר תאריך:</span>
                            </div>
                            <div>
                                <HeCustomDatePicker setChosenDate={setDate} />
                            </div>
                        </div>
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
                            onChange={handleClientChange}
                        >
                            <MenuItem value="בחר לקוח" disabled={true}>
                                <em>בחר לקוח</em>
                            </MenuItem>
                            {clients && clients.map((clientOption, index) => (
                                <MenuItem key={index} value={clientOption._id}>{clientOption.fullName}</MenuItem>
                            ))}
                        </Select>
                    </styled.FormGroup>
                    <styled.FormGroupCheckBox>
                        <div>
                            <CustomizedCheckbox />
                        </div>
                    </styled.FormGroupCheckBox>
                    <styled.FormGroupFile style={{ textAlign: 'center' }}>
                        {/* <styled.Label>תמונות:</styled.Label> */}
                        {/* <FileUpload onSelect={(value) => setImagesFiles(value)} mode="basic" accept="image/*" maxFileSize={5000000} chooseLabel='העלאת תמונה' /> */}

                        <styled.Input type="file" name="image" {...register('imageFile')} required />
                    </styled.FormGroupFile>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        {/* <styled.SubmitButton dir='ltr' type="submit" variant="contained" endIcon={<IoMdSend />}>הוסף</styled.SubmitButton> */}
                        <Button label="Submit" icon="pi pi-check" loading={loading} />

                    </div>
                </styled.Form>
            </styled.FormContainer>
        </styled.FormWrapper>
    );
};