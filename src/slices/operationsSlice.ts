import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Operation } from "src/shared/ui/operation/operationsTypes";

interface OperationsTypes {
    operations: Operation[]
}

const initialState: OperationsTypes = {
    operations: []
}


export const operationsSlice = createSlice({
    name: 'operations',
    initialState,
    reducers: {
        addOperation: (state, action) => {
            state.operations = [...state.operations, action.payload]
        },
    }
})

const { actions, reducer } = operationsSlice;
export const { addOperation } = operationsSlice.actions
export default reducer;