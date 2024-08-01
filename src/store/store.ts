import { configureStore } from "@reduxjs/toolkit";
import  mainSlice  from "src/slices/mainSlice";
import  operationsSlice from "src/slices/operationsSlice";

export const store = configureStore({
    reducer: {
        main: mainSlice,
        operations: operationsSlice,
    },
    //devTools: process.env.NODE_ENV !== 'production',  // включаем только при разработке
    devTools: true, // всегда включен
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export type IRootState  = ReturnType<typeof store.getState>