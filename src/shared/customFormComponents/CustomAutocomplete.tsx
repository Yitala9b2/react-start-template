import { Controller } from "react-hook-form";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { FC } from 'react';
import { AutocompleteProps } from "@mui/material";



interface IFormAutoComplete {
    className?: string,
    id: string,
    name: string,
    control: any,
    label: string,
    disabled?: boolean,
    val: (value:any) => void,
    rules?: any,
    options: {}[],
    requiredInput?: boolean,
    defaultValue: any,
    isOptionEqualToValue: (option: any, value: any) => boolean,
    readOnly: boolean,
    getOptionLabel: (option: any) => string,
    disableClearable?: boolean
}


export const CustomAutocomplete: FC<IFormAutoComplete> = ({
    defaultValue,
    className,
    id,
    name,
    control,
    getOptionLabel,
    options,
    val,
    rules,
    isOptionEqualToValue,
    label,
    readOnly, disableClearable }) => {


    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            rules={rules}
            control={control}
            render={({
                field: { onChange, value, ref },
                fieldState: { error },
                formState,
            }) => (
                <Autocomplete
                    disableClearable={disableClearable}
                    readOnly={readOnly}
                    value={val(value)}
                    options={options}
                    getOptionLabel={getOptionLabel}
                    isOptionEqualToValue={isOptionEqualToValue}
                    id={id}
                    onChange={(event, newvalue) => {
                        onChange(newvalue ? newvalue : null)
                    }}
                    className={className}
                    renderInput={(params) => <TextField error={!!error} inputRef={ref}  {...params} label={label} />}
                />
            )}
        />
    );
};

