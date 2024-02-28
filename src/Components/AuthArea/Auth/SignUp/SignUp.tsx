import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormEvent } from 'react';
import * as styled from './../SignIn/SignIn.styled'
import UserModel from '../../../../Models/UserModel';
import { Tooltip } from '@mui/material';



function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit">
                TrueGas
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

interface DataProps { firstName: string, lastName: string, email: string, password: string }
export default function SignUp() {
    const { register, handleSubmit } = useForm<UserModel>()
    const navigate = useNavigate()


    const onSubmit = (user: UserModel) => {
        navigate('/signin');
    };

    return (
        <styled.formGroupWrapper>
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
                        הרשמה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={2} dir='rtl'>
                            <Grid item xs={12} sm={6} >
                                <styled.inputWrapper
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="שם פרטי"
                                    {...register('firstName')}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <styled.inputWrapper
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="שם משפחה"
                                    name="lastName"
                                    {...register('lastName')}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <styled.inputWrapper
                                    required
                                    fullWidth
                                    id="email"
                                    label="אימייל"
                                    name="email"
                                    {...register('email')}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <styled.inputWrapper
                                    required
                                    fullWidth
                                    name="password"
                                    label="סיסמה"
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Tooltip title="שליחה" placement="bottom">
                        <Button type='submit' fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            שליחה
                        </Button>
                        </Tooltip>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link dir='rtl' style={{ cursor: 'pointer' }} onClick={() => navigate('/signin')} variant="body2">
                                    כבר איתנו? לחצו כאן כדי להתחבר!
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </styled.formGroupWrapper>
    );
}