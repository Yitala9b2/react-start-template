import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";
import { setToken, setUser } from "./mainSlice";







interface snackBarTypes {
    snackBar: {
        open: boolean,
        text: string,
        severity: AlertColor,
    }

}

const initialState: snackBarTypes = {
    snackBar: {
        open: false,
        text: '',
        severity: 'info',
    }

}

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setSnackBar: (state, action) => {
            state.snackBar = action.payload
        },
    }
})

const { actions, reducer } = registrationSlice;

export const { setSnackBar } = registrationSlice.actions


export default reducer;