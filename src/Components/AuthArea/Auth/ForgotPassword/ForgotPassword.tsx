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
import * as styled from './../SignIn/SignIn.styled'
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormEvent } from 'react';
import './ForgotPassword.css'


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href={'#'}>
                TrueGas
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function ForgotPassword() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
                        שחזור סיסמה
                    </Typography>
                    <Typography component="div" dir='rtl' fontSize={15} marginTop={3} textAlign='right'>
                        הכנס/י את האימייל למטה על מנת <br />
                        שנוכל לשלוח קישור לאיפוס סיסמה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={2} dir='rtl'>
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
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            שליחה
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link dir='rtl' style={{ cursor: 'pointer' }} onClick={() => navigate('/signin')} variant="body2">
                                    כבר איתנו? לחצו כאן להתחבר!
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