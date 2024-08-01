import React, { useContext, useEffect } from 'react';
import { LanguageContext } from 'src/app/context/LanguageContext';
import { ThemeContext } from 'src/app/context/ThemeContext';
import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/store';
import { Navigate } from 'react-router-dom';




const Profile = () => {
    const { language } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)
    const user = useSelector((state: IRootState) => state.main.user)


    return (
        <div className={'App-body ' + theme}>
            {user ?
                <ul>
                    <li>Имя: {user.name}</li>
                    <li>Фамилия: {user.lastName}</li>
                    <li>Пол: {user.gender}</li>
                    <li>Возраст: {user.age}</li>
                    <li>Почта: {user.email}</li>
                    <li>Телефон: {user.phoneNumber}</li>
                </ul>
                : <Navigate to='/login' />}
        </div>
    );
};

export default Profile;
