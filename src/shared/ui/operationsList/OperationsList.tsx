import React, { FC, ReactNode, memo, useState, useEffect, useCallback, useRef } from 'react';
import './operationsList.scss';
import { FullOperation } from '../operation/FullOperation';
import { IRootState } from 'src/store/store';
import { useSelector } from 'react-redux';


// eslint-disable-next-line react/prop-types
export const OperationsList = memo(() => {
    //const [operations, setOperations] = useState<FullOperationTypes[] | null>(
    //    data
    //)
    const items = useSelector((state: IRootState) => state.operations.operations)

    //const addOperationHandler = () => {
    //    setOperations(val => [...val, createRandomOperation(new Date().toString())])
    //    //operations.push(createRandomOperation(new Date().toString()))
    //}


    const renderItems = () => {
        return (
            items.map((value, index): ReactNode => {
                return <FullOperation key={index} value={value} />;
            })
        )
    }

    return (
        <div className='operationsList'>
            {renderItems()}
        </div>
        
        
    );
});
