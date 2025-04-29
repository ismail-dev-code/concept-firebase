import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;