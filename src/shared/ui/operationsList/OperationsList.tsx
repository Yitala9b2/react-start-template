import React, { FC, ReactNode, memo, useState, useEffect, useCallback, useRef } from 'react';
import './operationsList.scss';
import { FullOperation } from '../operation/FullOperation';
import { FullOperationTypes } from '../operation/operationsTypes';
import data from './operationsData.json'
import { useInView } from "react-intersection-observer";
import { createRandomOperation } from 'src/homeworks/ts1/3_write';
import { Category } from '../operation/operationsTypes';
import { useScrollToFetchData } from 'src/hooks/observerHook';
import { Button } from '../../button/Button';



// eslint-disable-next-line react/prop-types
export const OperationsList = memo(() => {
    const [operations, setOperations] = useState<FullOperationTypes[] | null>(
        data
    )
    console.log(operations)
    //const [visible, setVisible] = useState(false);

    //const ref = useRef<HTMLDivElement | null>(null);
    //const add = () => {
    //    createRandomOperation(new Date().toString())
    //}
    //useScrollToFetchData(add)
//useEffect(() => {

//    const observer = new IntersectionObserver(([entry]) => {
//      console.log(entry.isIntersecting);
//      if (entry.isIntersecting) {
//        getNextProducts();
//      }
//    });
//    observer.observe(ref.current);

//    return () => observer.disconnect();
//  }, [getNextProducts]);

    //const { ref, inView, entry } = useInView({
    //    /* Optional options */
    //    threshold: 0,
    //    onChange: (inView, entry) => { inView && operations.push(createRandomOperation(new Date().toString()))}
    //  });


    const addOperationHandler = () => {
        setOperations(val => [...val, createRandomOperation(new Date().toString())])
        //operations.push(createRandomOperation(new Date().toString()))
    }


    const renderItems = () => {
        return (
            operations.map((value): ReactNode => {
                return <FullOperation key={value.id} value={value} />;
            })
        )
    }
    //console.log(entry)

    //useEffect(() => {
    //    if (inView) {
    //        console.log(inView)
    //        //console.log(createRandomOperation(new Date().toString()))
    //        //operations.push(createRandomOperation(new Date().toString()))
    //    }

    //  }, [inView])


    return (
        <>
        <div className='operationsList'>
            {renderItems()}
        </div>
        <Button onClick={addOperationHandler}  primary size={'medium'} label={'Показать еще'}/>
        </>
        
    );
});
