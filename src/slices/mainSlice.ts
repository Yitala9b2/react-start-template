import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export interface mainTypes {
    token: string
    isInitial: boolean
    user: null | {
        email: string,
        password:string,
        age: number,
        name: string,
        lastName: string,
        phoneNumber: string,
        gender: string
    }
}

const initialState: mainTypes = {
    token: "",
    isInitial: false,
    user: null,
}

const userObj = {
    age: "30",
    name: "Иван",
    lastName: "Иванов",
    phoneNumber: "+7(999)999-99-99",
    gender: "Мужчина"
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = {...action.payload, ...userObj}
        },
        setInitial: (state, action) => {
            state.isInitial = action.payload
        },
    }})

    const { actions, reducer } = mainSlice;
    export const { setToken, setUser, setInitial } = mainSlice.actions
    export default reducer;