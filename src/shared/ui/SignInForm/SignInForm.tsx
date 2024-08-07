import { Box, Button, IconButton } from '@mui/material';
import React, { FC, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { CustomTextField } from '../../customFormComponents/CustomTextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from 'src/slices/mainSlice';
import {  useNavigate } from 'react-router-dom';
import './signIn.scss'


interface IInput {
    email: string,
    password: string,
};

const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const SignInForm: FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();
    const methods = useForm<IInput>({
        defaultValues: data
    })
    const [showPassword, setShowPassword] = useState(true);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const { handleSubmit, formState: { errors }, control } = methods


    const onSubmit: SubmitHandler<IInput> = data => {
        localStorage.setItem("myToken", 'some token')
        localStorage.setItem("user", JSON.stringify(data))
        dispatch(setToken('token'))
        dispatch(setUser(data))
        navigate("/profile");
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormProvider {...methods}>
            <Box className='form signInForm' component="form" onSubmit={handleSubmit(onSubmit)}>
                <>
                <CustomTextField
                     className='wAll'
                    requiredInput
                    readOnly={false}
                    name="email"
                    control={control}
                    label="Введите email"
                    id="input-name"
                    pattern={{
                        value: pattern,
                        message: "Invalid email address"
                    }
                    }
                    startAdornment={
                        <InputAdornment position="start">
                            <PersonIcon />
                        </InputAdornment>
                    }
                />
                {errors?.email?.type === "pattern" && <div className='error'>Введен некорректный email</div>}
                </>



                <CustomTextField
                     className='wAll'
                    type={showPassword ? 'text' : 'password'}
                    requiredInput
                    readOnly={false}
                    name="password"
                    control={control}
                    label="Введите пароль"
                    id="input-password"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    startAdornment={
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    }
                />
                
                <Button variant="contained" type="submit"> Отправить</Button>
                </Box>
        </FormProvider>
    );
};


