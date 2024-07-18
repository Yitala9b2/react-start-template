import { Box, Button, IconButton } from '@mui/material';
import React, { FC, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { CustomTextField } from '../../customFormComponents/CustomTextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import './signIn.scss'


interface IInput {
    personName: string,
    personPassword: string,
};

const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const SignInForm: FC = () => {
    const [data, setData] = useState({
        personName: '',
        personPassword: ''
    })
    const methods = useForm<IInput>({
        defaultValues: data
    })
    const [showPassword, setShowPassword] = useState(true);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const { handleSubmit, formState: { errors }, control } = methods


    const onSubmit: SubmitHandler<IInput> = data => console.log(data);


    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormProvider {...methods}>
            <Box className='form' component="form" onSubmit={handleSubmit(onSubmit)}>
                {/*<Box className='wAll'>*/}
                <>
                <CustomTextField
                     className='wAll'
                    requiredInput
                    readOnly={false}
                    name="personName"
                    control={control}
                    label="Введите email"
                    id="input-name"
                    pattern={{
                        value: pattern,
                        message: "Invalid email address"
                    }
                    }
                    //register={register}
                    startAdornment={
                        <InputAdornment position="start">
                            <PersonIcon />
                        </InputAdornment>
                    }
                />
                {errors?.personName?.type === "pattern" && <div className='error'>Введен некорректный email</div>}
                </>
                {/*</Box>*/}

                {/*<Box className='wAll'>*/}
                <CustomTextField
                     className='wAll'
                    type={showPassword ? 'text' : 'password'}
                    requiredInput
                    readOnly={false}
                    name="personPassword"
                    control={control}
                    label="Введите пароль"
                    id="input-password"
                    //register={register}
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
            {/*</Box>*/}
        </FormProvider>
    );
};


