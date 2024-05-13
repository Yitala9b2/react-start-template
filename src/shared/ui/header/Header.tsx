import React from 'react';
import Logo from '../logo/Logo';
import './header.scss';


const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Logo />
                <div>Шапка</div>
            </div>
        </header>
    );
};

export default Header;
