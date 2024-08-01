import React, { useContext, useEffect } from 'react';
import { LanguageContext } from 'src/app/context/LanguageContext';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { OperationsList } from 'src/shared/ui/operationsList/OperationsList';
import { resource } from 'src/app/localization/resources';
import { Box, Button } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

const Operations = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className={'App-body ' + theme}>
                {(user && user.email === "admin@ya.ru") && <Button component={Link} to="add" variant='contained'>
                    {resource[language].components.operation.addOperation}
                </Button>}
                <Box>
                    <OperationsList />
                </Box>
            </div>
            <Outlet />
        </>
    );
};

export default Operations;
