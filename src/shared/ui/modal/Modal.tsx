import React, { FC } from 'react';
import clsx from 'clsx';
import { Button } from '../../button/Button';
import './modal.scss';


interface ModalProps {
    visible: boolean;
    children?: string | null;
}
// eslint-disable-next-line react/prop-types
export const Modal: FC<ModalProps> = ({ visible, children }) => {
    return (
        <div
            className={clsx('modalBackground', visible, {
                visible: visible,
            })}
        >
            <div className="modal">
                <div>{children}</div>
                <div>
                    <Button primary size={'medium'} label={'закрыть'}></Button>
                </div>
            </div>
        </div>
    );
};
