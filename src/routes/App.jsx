import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home"
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import '../styles/global.scss'

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact Path="/" element={<Home/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;