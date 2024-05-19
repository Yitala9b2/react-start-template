import React, { useContext, FC } from 'react';
import { Button } from '../../../shared/button/Button';
import { resource } from '../../../app/localization/resources';
import { LanguageContext } from '../../../app/context/LanguageContext';


interface IlanguageButton {
    text: boolean;
}

const LanguageButton: FC<IlanguageButton> = ({text}) => {
    const { language, i18n, setLanguage } = useContext(LanguageContext)
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en');
    };
    return (
        <>
            <Button
                primary size={'medium'} label={'сменить язык'}
                onClick={toggleLanguage}
            />
            {text ? <div>{resource[language].components.testLanguage.text} </div> : null}
        </>
    );
};

export default LanguageButton;
