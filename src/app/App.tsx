import React, { useEffect, ReactNode, FC } from 'react';
//import { useSelector } from 'react-redux';
//import { IRootState } from 'src/store/store';
import Layout from 'src/shared/ui/layout/Layout';
import './styles/app.scss'
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Login } from 'src/pages';
import Profile from 'src/pages/Profile';
import Operations from 'src/pages/Operations';
import { Route, Routes } from 'react-router-dom';
import { Modal } from 'src/shared/ui/modal/Modal';
import { AddOperationForm } from 'src/shared/ui/operationsForm/AddOperationForm';
import Registration from 'src/pages/Registration';
import MySnackBar from 'src/shared/ui/snackBar/MySnackBar';
import { ProtectedRoute } from 'src/shared/ui/protectedRoute/ProtectedRoute';



function App() {
    //const user = useSelector((state: IRootState) => state.main.user)

    return (
        <ThemeProvider>
            <LanguageProvider>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route path="login" element={<Login />}></Route>
                        <Route path="registration" element={<Registration />}></Route>
                        <Route path="profile"
                            element={
                                <ProtectedRoute/>}>
                        </Route>
                        <Route path="operations" element={<Operations />}>
                            <Route path="add" element={<Modal children={<AddOperationForm />} />} />
                        </Route>
                    </Route>

                </Routes>
                <MySnackBar />
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
