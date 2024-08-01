import React, {useEffect, useInsertionEffect} from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInitial, setUser, setToken } from 'src/slices/mainSlice';
import { useNavigate } from "react-router-dom";
import './layout.scss';



const Layout = (props:any) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("myToken")
    const user = localStorage.getItem("user")
    const dispatch = useDispatch()
    useEffect(() => {
        if (token) {
            dispatch(setToken(token))
            dispatch(setUser(JSON.parse(user)))
        }
        dispatch(setInitial(true))
        navigate("/login");
    },[])
    return (
        <div className="layout">
            <Header />
            <Outlet/>
        </div>
    );
};

export default Layout;
