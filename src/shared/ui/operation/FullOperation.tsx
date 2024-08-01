import React, { FC } from 'react';
import './operation.scss';
import { Operation } from './operationsTypes';
import dayjs from 'dayjs';



interface IPropsFullOperationTypes {
    value : Operation
}

export const FullOperation: FC<IPropsFullOperationTypes> = ({...props}) => {
    return (
        <div className="operation dfc">
            <div className="operation__header df">
                <div className="operation__info dfc">
                    <h3>{props.value.name}</h3>
                    <span>{props.value.category.name}</span>
                    <span>{dayjs(props.value.date).format('DD-MM-YYYY')}</span>
                </div>
                <div className="operation__amount">{props.value.amount}</div>
            </div>
            <div className="operation__description">{props.value.description}</div>
        </div>
    );
};