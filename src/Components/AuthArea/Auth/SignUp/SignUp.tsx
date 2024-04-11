import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Resolver, useForm } from 'react-hook-form';
import * as styled from './../SignIn/SignIn.styled'
import UserModel from '../../../../Models/UserModel';
import { FormHelperText, Tooltip } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import validateForms from '../../../../Utils/formsValidations';



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

export default function SignUp() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<UserModel>({
        resolver: yupResolver(validateForms.validateRegisterSchema),
        mode: "onChange"
    });
    const navigate = useNavigate()


    const onSubmit = (user: UserModel) => {
        navigate('/signin');
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
                        הרשמה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={2} dir='rtl'>
                            <Grid item xs={12} sm={6} >
                                <styled.InputWrapper
                                    helperText={<FormHelperText sx={{ textAlign: 'right' }}>{errors.firstName?.message}</FormHelperText>}
                                    error={errors.firstName?.message ? true : false}
                                    name="firstName"
                                    fullWidth
                                    id="firstName"
                                    label="שם פרטי"
                                    aria-label='first name'
                                    {...register('firstName')}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <styled.InputWrapper
                                    helperText={<FormHelperText sx={{ textAlign: 'right' }}>{errors.lastName?.message}</FormHelperText>}
                                    error={errors.lastName?.message ? true : false}
                                    fullWidth
                                    id="lastName"
                                    label="שם משפחה"
                                    name="lastName"
                                    aria-label='last name'
                                    {...register('lastName')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <styled.InputWrapper
                                    helperText={<FormHelperText sx={{ textAlign: 'right' }}>{errors.email?.message}</FormHelperText>}
                                    error={errors.email?.message ? true : false}
                                    fullWidth
                                    id="email"
                                    label="אימייל"
                                    name="email"
                                    aria-label='email'
                                    {...register('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <styled.InputWrapper
                                    helperText={<FormHelperText sx={{ textAlign: 'right' }}>{errors.password?.message}</FormHelperText>}
                                    error={errors.password?.message ? true : false}
                                    fullWidth
                                    name="password"
                                    label="סיסמה"
                                    type="password"
                                    id="password"
                                    aria-label='password'
                                    {...register('password')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <styled.InputWrapper
                                    helperText={<FormHelperText sx={{ textAlign: 'right' }}>{errors.confirmPassword?.message}</FormHelperText>}
                                    error={errors.confirmPassword?.message ? true : false}
                                    fullWidth
                                    name="confirmPassword"
                                    label="אימות סיסמה"
                                    type="password"
                                    id="confirmPassword"
                                    aria-label='confirmPassword'
                                    {...register('confirmPassword')}
                                />
                            </Grid>
                        </Grid>
                        <Tooltip title="שליחה" placement="bottom">
                            <Button type='submit' fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={!isValid}>
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
        </styled.FormGroupWrapper>
    );
}