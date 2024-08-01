import React from 'react';
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

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Routes>
                    <Route path="/" element={<Layout/>} >
                        <Route path="login" element={<Login />}></Route>
                        <Route path="profile" element={<Profile />}></Route>
                        <Route path="operations" element={<Operations />}>
                            <Route path="add" element={<Modal children={<AddOperationForm />} />} />
                        </Route>
                    </Route>
                </Routes>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
