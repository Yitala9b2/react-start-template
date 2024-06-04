import React, { FC } from 'react';
import './operation.scss';
import { FullOperationTypes } from './operationsTypes';


// eslint-disable-next-line react/prop-types
export const FullOperation: FC<FullOperationTypes> = ({ amount, categoryName, name, description, date }) => {
    return (
        <div className="operation dfc">
            <div className="operation__header df">
                <div className="operation__info dfc">
                    <h3>{name}</h3>
                    <span>{categoryName}</span>
                    <span>{date}</span>
                </div>
                <div className="operation__amount">{amount}</div>
            </div>
            <div className="operation__description">{description}</div>
        </div>
    );
};
