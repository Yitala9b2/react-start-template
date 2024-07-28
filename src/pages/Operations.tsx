import React, { useContext, useEffect, useState, useCallback } from 'react';
import { LanguageContext } from 'src/app/context/LanguageContext';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { OperationsList } from 'src/shared/ui/operationsList/OperationsList';
import { Modal } from 'src/shared/ui/modal/Modal';
import { AddOperationForm } from 'src/shared/ui/operationsForm/AddOperationForm';
import { resource } from 'src/app/localization/resources';
import clsx from 'clsx';
import { Box, Button } from '@mui/material';
import {  useLocation, useParams, useNavigate, Outlet, Link   } from 'react-router-dom';

const Operations = () => {
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    //const openModalHundler = useCallback(() => {
    //    setModalOpen(true)
    //},[])
    //const closeModalHundler = useCallback(() => {
    //    setModalOpen(false)
    //    navigate('/operations');
    //},[])

    return (
        <>
            <div className={'App-body ' + theme}>
                <Button variant='contained'>
                    <Link to="add">{resource[language].components.operation.addOperation}</Link>
                    </Button>
                <Box>
                    <OperationsList />
                    </Box>
            </div>
            <Outlet/>
        </>
    );
};

export default Operations;
