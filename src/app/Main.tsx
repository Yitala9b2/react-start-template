import Logo from './logo.svg';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { OperationsList } from 'src/shared/ui/operationsList/OperationsList';
import { FullOperationTypes } from 'src/shared/ui/operation/operationsTypes';
import './styles/main.scss';
//import data from './operationsData.json'
import useHttp from 'src/hooks/http.hook';
import { Button } from 'src/shared/button/Button';
import { Modal } from 'src/shared/ui/modal/Modal';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { Login } from 'src/pages';
import Operations from 'src/pages/Operations';
import { LanguageContext } from './context/LanguageContext';
import { AddOperationForm } from 'src/shared/ui/operationsForm/AddOperationForm';
import { Route, Routes, Navigate } from 'react-router-dom';

const Main = () => {

    return (
            <Routes>
                <Route path="/" element={<Navigate replace to="login" />} />
                <Route path="login" element={<Login />}></Route>
                <Route path="operations" element={<Operations />}>
                <Route path="add" element={<Modal children={<AddOperationForm/> }/>}/>
                </Route>
            </Routes>
    )

    //const {theme} = useContext(ThemeContext)
    //const [openModal, setModalOpen] = useState(false)
    //return (
    //    <>
    //    <div className={clsx('App-body ' + theme, openModal,{
    //        openModal: openModal,
    //    })}>
    //    <Button onClick={()=>setModalOpen(true)}  primary size={'medium'} label={'Открыть модальное окно'}/>
    //    <OperationsList />
    //    <Modal visible={openModal} close={()=>setModalOpen(false)}>Текст модалки</Modal>
    //    </div>

    //    </>
    //);
};

export default Main;
