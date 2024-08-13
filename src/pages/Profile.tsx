import React, { useContext, useEffect, FC } from 'react';
import { LanguageContext } from 'src/app/context/LanguageContext';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/store';
import { Navigate } from 'react-router-dom';
import { UserTypes } from 'src/types/UserTypes';

const Profile: FC<{userProps: UserTypes | null}> = ({userProps}) => {
    const user = {...userProps}
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)


    return (
        <div className={'App-body ' + theme}>
                <ul>
                    <li>Имя: {user.name}</li>
                    <li>Фамилия: {user.lastName}</li>
                    <li>Пол: {user.gender}</li>
                    <li>Возраст: {user.age}</li>
                    <li>Почта: {user.email}</li>
                    <li>Телефон: {user.phoneNumber}</li>
                </ul>
        </div>
    );
};

export default Profile;
