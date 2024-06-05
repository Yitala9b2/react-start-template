import React, { FC } from 'react';
import { createPortal } from "react-dom";
import clsx from 'clsx';
import { Button } from '../../button/Button';
import './modal.scss';
import { ModalProps } from './ModalTypes';


// eslint-disable-next-line react/prop-types
export const Modal: FC<ModalProps> = ({ close, visible, children }) => {
    return (
        <>
        {visible && createPortal(
                <div 
                    className='modalBackground'
                >
                    <div className="modal">
                        <div>{children}</div>
                        <div>
                            <Button onClick={close} primary size={'medium'} label={'закрыть'}></Button>
                        </div>
                    </div>
                </div>
                
                , document.body)}
        </>
    );
};
