import Logo from './logo.svg';
import React, {useContext, useState} from 'react';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { OperationsList } from 'src/shared/ui/operationsList/OperationsList';
import './styles/main.scss';
import data from './operationsData.json'
import useHttp from 'src/hooks/http.hook';


const Main = () => {
    const [operations, setOperations] = useState(
        data
    )
    console.log(operations)
    const {theme} = useContext(ThemeContext)
    return (
        <>
        <OperationsList items = {operations}/>
        <div className={'App-body ' + theme}>
            <img src={Logo} className="App-logo" alt="logo" />
        </div>
        </>
        
    );
};

export default Main;
