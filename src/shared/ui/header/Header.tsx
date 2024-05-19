import React, { useContext} from 'react';
import { resource } from '../../../app/localization/resources';
import { ThemeContext } from '../../../app/context/ThemeContext';
import { LanguageContext } from '../../../app/context/LanguageContext';
import Logo from '../logo/Logo';
import ToggleSwitch from '../switcher/ToggleSwitch';
//import { Button } from '../../../shared/button/Button';
import { useTranslation } from 'react-i18next'
import LanguageButton from '../languageButton/LanguageButton';
import './header.scss';


const Header = () => {
    //const { t, i18n } = useTranslation()
    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)



    return (
        <header className={'header ' + theme}>
            <div className="header__container">
                <Logo />
                <h1>{resource[language].components.header.head}</h1>
                <ToggleSwitch/>
                <LanguageButton text={false}/>
            </div>
        </header>
    );
};

export default Header;
