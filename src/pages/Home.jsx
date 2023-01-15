import React from "react"
import Argument from "../components/Argument";
import Header from "../components/Header";
import Main_message from "../components/Main_message";
import Portfolio from "../components/Portfolio";
import Selling from "../components/Selling";

const Home = () => {
    return (
        <>
            <Header/>
            <Main_message />
            <Portfolio />
            <Argument />
            <Selling />
        </>
    )
}

export default Home;