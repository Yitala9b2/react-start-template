import { Box, Button, IconButton } from '@mui/material';
import React, { FC, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { CustomTextField } from '../../customFormComponents/CustomTextField';
import { CustomAutocomplete } from '../../customFormComponents/CustomAutocomplete';
import { CustomNumericTextField } from '../../customFormComponents/CustomNumericTextField';
import { CategoryType } from './FormTypes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addOperation } from 'src/slices/operationsSlice';
import { Operation } from '../operation/operationsTypes';
import'./addOperation.scss'

const CATEGORIES = [
    { id: 'vegetables', name: 'овощи' },
    { id: 'fruits', name: 'фрукты' }
]
const TYPES = [
    'Затраты', 'Прибыль'
]





export const AddOperationForm: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState<Operation>({
        id:"",
        type: "Прибыль",
        name: "",
        description: "",
        date: new Date(),
        amount: null,
        category: {
            id: 'vegetables',
            name: 'овощи',
        },
    })
    const randomNumber = (val: number): string => Math.floor(Math.random() * (val - 0) + 0).toString();
    const methods = useForm<Operation>({
        defaultValues: data
    })

    const { handleSubmit, formState: { errors }, control, setValue } = methods


    const onSubmit: SubmitHandler<Operation> = (data) => {
        setValue('date', new Date());
        dispatch(addOperation({...data, id: randomNumber(100000)}))
        navigate(-1);
    }




    return (
        <FormProvider {...methods}>
            <Box className='form addOperationForm' component="form" onSubmit={handleSubmit(onSubmit)}>
            <CustomAutocomplete
            disableClearable={true}
                    className='wAll'
                    readOnly={false}
                    val={(value) => value ? value : ""}
                    defaultValue={data.type}
                    id="input-type"
                    name='type'
                    control={control}
                    getOptionLabel={(option) =>  option || ""}
                    options={TYPES}
                    isOptionEqualToValue={(option, value) => (option === value)}
                    label='Тип операции'
                    />
                    <CustomTextField
                        requiredInput
                        className='wAll'
                        readOnly={false}
                        name="name"
                        control={control}
                        label="Введите название операции"
                        id="input-name"
                    />
                    <CustomNumericTextField
                        className='wAll'
                        readOnly={false}
                        name="amount"
                        control={control}
                        label="Введите сумму операции"
                        id="input-amount"
                    />
                    <CustomAutocomplete
                    disableClearable={true}
                    className='wAll'
                    readOnly={false}
                    val={(value) => value?.name ? value : null}
                    defaultValue={data.category}
                    id="input-category"
                    name='category'
                    control={control}
                    getOptionLabel={(option) => option.name || ""}
                    options={CATEGORIES}
                    isOptionEqualToValue={(option, value) => (option.id === value.id)}
                    label='Категория'
                    />


                    <CustomTextField
                        className='wAll'
                        multiline={true}
                        rows= {4}
                        requiredInput
                        readOnly={false}
                        name="description"
                        control={control}
                        label="Введите описание"
                        id="input-description"
                    />

                <Button variant="contained" type="submit"> Отправить</Button>
            </Box>
        </FormProvider>
    );
};


