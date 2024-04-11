import React from 'react';
import { Container, CssBaseline, Box, Avatar, Typography, Grid, Tooltip, Button } from '@mui/material';
import * as styled from '../SignIn/SignIn.styled';
import { useForm } from 'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLoaderData, useNavigate } from 'react-router-dom';
import notify from '../../../../Services/NotifyService';
import authService from '../../../../Services/AuthServices';

interface FormValues {
    password: string;
    confirmPassword: string;
}

export const ResetPassword = () => {
    const token = useLoaderData() as string;
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isValid }, getValues } = useForm<FormValues>({
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
        criteriaMode: "all",
        mode: 'onChange'
    });

    const onSubmit = async (newPassword: FormValues) => {
        console.log(newPassword.password)
        try {
            const passwordChangeConfirmation = await authService.resetPassword(token, newPassword.password)
            if (passwordChangeConfirmation) {
                notify.success(passwordChangeConfirmation)
                return navigate('/signin')
            }
        } catch (error: any) {
            notify.error(error.message)
        }

    };

    return (
        <styled.FormGroupWrapper>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        איפוס סיסמה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={5} dir='rtl'>
                            <Grid item xs={12} sm={12} >
                                <Grid item xs={12}>
                                    <styled.InputWrapper
                                        required
                                        fullWidth
                                        name="password"
                                        label="סיסמה"
                                        type="password"
                                        {...register('password', {
                                            required: "*שדה זה הינו חובה",
                                            pattern: {
                                                value: /^\S*$/,
                                                message: "*הסיסמה לא יכולה לכלול רווחים"
                                            }
                                        })}
                                    />
                                    <span className="ErrorMessage" style={{ color: 'red' }}>{errors.password?.message}</span>
                                </Grid>
                                <Grid item xs={12} sm={12} marginTop={1}>
                                    <styled.InputWrapper
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="אימות סיסמה"
                                        type="password"
                                        id="confirmPassword"
                                        {...register('confirmPassword', {
                                            required: '*שדה זה הינו חובה',
                                            validate: value => value === getValues('password') || "*הסיסמאות אינן תואמות",
                                            pattern: {
                                                value: /^\S*$/,
                                                message: "*הסיסמה לא יכולה לכלול רווחים"
                                            }
                                        })}
                                    />
                                    <span className="ErrorMessage" style={{ color: 'red' }}>{errors.confirmPassword?.message}</span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Tooltip title="שליחה" placement="bottom">
                            <Button type='submit' disabled={!isValid} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                אישור
                            </Button>
                        </Tooltip>
                    </Box>
                </Box>
            </Container>
        </styled.FormGroupWrapper>
    );
};
