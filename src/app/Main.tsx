import Logo from './logo.svg';
import React, {useContext} from 'react';
import { ThemeContext } from 'src/app/context/ThemeContext';
import './styles/main.scss';

const Main = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={'App-body ' + theme}>
            <img src={Logo} className="App-logo" alt="logo" />
        </div>
    );
};

export default Main;
