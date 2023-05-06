import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddResume from "./components/AddResume"
import Myresume from "./components/Resume/Resumes"
import About from "./components/Resume/About"
import ResumeDetail from "./components/ResumeDetail"

function App() {
    return ( < React.Fragment >
        <
        header >
        <
        Header / >
        <
        /header> 

        <
        main >
        <
        Routes >

        <
        Route path = "/"
        element = { < Home / > }
        exact / >
        <
        Route path = "/add"
        element = { < AddResume / > }
        exact / >
        <
        Route path = "/resume"
        element = { < Myresume / > }
        exact / >
        <
        Route path = "/about"
        element = { < About / > }
        exact / >


        <
        Route path = "/resume/:id"
        element = { < ResumeDetail / > }
        exact / >

        <
        /Routes> < /
        main >

        <
        /React.Fragment>
    );
}

export default App;