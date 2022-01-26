//router
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../Components/LandingPages/Lading';
import NotFount from '../Components/Pages/NotFount';
import Poke from '../Components/Pages/poke';
import Header from '../Components/Shared/Header';
export default function Rutas() {

    return (
    <>
        <BrowserRouter>

        <Header />
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/poke" element={<Poke/>} />
        <Route path="*" element={<NotFount />} />    
        </Routes>
        </BrowserRouter>
        </>
    );
}