import React, { FC } from 'react';
import './operation.scss';
import { ShortOperationTypes } from './operationsTypes';


// eslint-disable-next-line react/prop-types
export const ShortOperation: FC<ShortOperationTypes> = ({ amount, categoryName, name, shortDescription }) => {
    return (
        <div className="operation dfc short">
            <div className="operation__header df">
                <div className="operation__info dfc">
                    <h3>{name}</h3>
                    <span>{categoryName}</span>
                </div>
                <div className="operation__amount">{amount}</div>
            </div>
            <div className="operation__description">{shortDescription}</div>
        </div>
    );
};
