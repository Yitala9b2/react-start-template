import React, { useContext, useEffect } from 'react';
import { LanguageContext } from 'src/app/context/LanguageContext';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { OperationsList } from 'src/shared/ui/operationsList/OperationsList';
import { resource } from 'src/app/localization/resources';
import { Box, Button } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/store';

const Operations = () => {
    const user = useSelector((state: IRootState) => state.main.user)
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className={'App-body ' + theme}>
                {(user && user.email === "admin@yan.ru") && <Button component={Link} to="add" variant='contained'>
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
