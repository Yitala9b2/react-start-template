import React, { useContext } from 'react';
import { resource } from '../../../app/localization/resources';
import { ThemeContext } from '../../../app/context/ThemeContext';
import { LanguageContext } from '../../../app/context/LanguageContext';
import Logo from '../logo/Logo';
import ToggleSwitch from '../switcher/ToggleSwitch';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LanguageButton from '../languageButton/LanguageButton';
import './header.scss';


const Header = () => {
    const { theme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)



    return (
        <header className={'header ' + theme}>
            <Box className="header__container">
                <Logo />
                <nav className="header__list df">
                    <NavLink to="/login" className={(props)=> props.isActive ? "header__li active" : "header__li"}  >{resource[language].components.header.login}</NavLink>
                    <NavLink to="/operations" className={(props)=> props.isActive ? "header__li active" : "header__li"}  >{resource[language].components.header.operations}</NavLink>
                    <NavLink to="/profile" className={(props)=> props.isActive ? "header__li active" : "header__li"}  >{resource[language].components.header.profile}</NavLink>
                </nav>
                <Box className='header__actions df'>
                    <ToggleSwitch />
                    <LanguageButton text={false} />
                </Box>

            </Box>
        </header>
    );
};

export default Header;
