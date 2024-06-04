import React, { FC, ReactNode } from 'react';
import './operationsList.scss';
import { FullOperation } from '../operation/FullOperation';
import { FullOperationTypes } from '../operation/operationsTypes';


// eslint-disable-next-line react/prop-types
export const OperationsList: FC<{ items: FullOperationTypes[] }> = ({ items }) => {
    const renderItems = () => {
        return (
            items.map((value) => {
                <FullOperation amount={value.amount}
                    categoryName={value.categoryName}
                    name={value.name} description={value.description} date={value.date} />
            })
        )
    }
    return (
        <div >
            {renderItems()}

        </div>
    );
};
