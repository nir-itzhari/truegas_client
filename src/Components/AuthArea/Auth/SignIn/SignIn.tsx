import React, { useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { TextField, Tooltip } from '@mui/material';
import * as Styled from './SignIn.styled'
import notify from '../../../../Services/NotifyService';
import authService from '../../../../Services/AuthServices';
import CredentialsModel from '../../../../Models/CredentialsModel';
// Lazy load the background image using Intersection Observer
const backgroundImageUrl = 'https://source.unsplash.com/random?wallpapers';

const BackgroundImage = styled.div`
  background-image: url(${backgroundImageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const SignInSide = () => {
    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();
    const backgroundImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = new Image();
                    img.src = backgroundImageUrl;
                    img.onload = () => {
                        if (backgroundImageRef.current) {
                            backgroundImageRef.current.style.backgroundImage = `url(${img.src})`;
                        }
                    };
                    observer.unobserve(entry.target);
                }
            });
        });

        if (backgroundImageRef.current) {
            observer.observe(backgroundImageRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const submit = async (credentials: CredentialsModel) => {
        try {
            await authService.login(credentials)
            notify.success('התחברת בהצלחה')
            navigate('/home', { replace: true });
        } catch (error) {
            notify.error(error)
        }
    };

    return (
        <Styled.formGroupWrapper>
            <Box component="main" sx={{ height: '91vh' }}>
                <CssBaseline />
                <Grid container>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        component={BackgroundImage}
                        ref={backgroundImageRef}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                כניסה
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit(submit)} sx={{ mt: 1 }}>
                                <Styled.inputWrapper
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="אימייל"
                                    name="email"
                                    {...register('email')}
                                    autoComplete="email"
                                    autoFocus
                                />
                                <Styled.inputWrapper
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="סיסמה"
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                    autoComplete="current-password"
                                />
                                <Tooltip title="כניסה" placement="bottom">
                                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                        כניסה
                                    </Button>
                                </Tooltip>
                                <Grid container>
                                    <Grid item xs>
                                        <Link dir="rtl" style={{ cursor: 'pointer' }} onClick={() => navigate('/forgot-password')} variant="body2">
                                            שכחת סיסמה?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link dir="rtl" style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')} variant="body2">
                                            עדיין לא איתנו? לחצו כאן להרשמה!
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Box mt={5}>
                                    <Typography variant="body2" color="text.secondary" align="center">
                                        {'Copyright © '}
                                        <Link color="inherit" href="https://mui.com/">
                                            TrueGas
                                        </Link>{' '}
                                        {new Date().getFullYear()}
                                        {'.'}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Styled.formGroupWrapper>
    );
};

export default SignInSide;