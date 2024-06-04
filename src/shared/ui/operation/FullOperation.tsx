import React, { FC } from 'react';
import './operation.scss';
import { FullOperationTypes } from './operationsTypes';
import dayjs from 'dayjs';

//interface irt {
//    value : FullOperationTypes
//}

// eslint-disable-next-line react/prop-types
//export const FullOperation: FC<FullOperationTypes> = ({name, categoryName, date, amount, description}) => {
//    return (
//        <div className="operation dfc">
//            <div className="operation__header df">
//                <div className="operation__info dfc">
//                    <h3>{name}</h3>
//                    <span>{categoryName}</span>
//                    <span>{date}</span>
//                </div>
//                <div className="operation__amount">{amount}</div>
//            </div>
//            <div className="operation__description">{description}</div>
//        </div>
//    );
//};


interface IPropsFullOperationTypes {
    value : FullOperationTypes
}
// eslint-disable-next-line react/prop-types
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