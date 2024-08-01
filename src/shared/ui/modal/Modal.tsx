import React, { FC } from 'react';
import { createPortal } from "react-dom";
import clsx from 'clsx';
import { Box, Typography, IconButton} from '@mui/material';
import { Button } from '../../button/Button';
import './modal.scss';
import CloseIcon from '@mui/icons-material/Close';
//import { ModalProps } from './ModalTypes';
import { ReactNode } from "react";
import { useNavigate } from 'react-router-dom';

interface ModalProps {
    children?: string | ReactNode | null;
}


// eslint-disable-next-line react/prop-types
export const Modal: FC<ModalProps> = ({ children }) => {
    const navigate = useNavigate();
    const close = () => {
        navigate(-1);
      }
    return (
        <>
             {createPortal(
                <div
                    className='modalBackground'
                >
                    <div className="modal">
                    <Box className='df fc dfb modal__header'>
                        <Box className='df fc'>
                            <Typography sx={{ pr: 2 }} variant="h6" component="h2"> добавить операцию</Typography>
                        </Box>
                        <IconButton onClick={close}><CloseIcon /></IconButton>
                    </Box>
                        <Box className='modal__content'>{children}</Box>
                    </div>
                </div>

                , document.body)}
        </>
    );
};
