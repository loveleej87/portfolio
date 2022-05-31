/**
 * @file: App.js
 * @description: 전체 페이지를 구성한다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from "react";

import Navbar from "./components/Navbar";
import MainSlide from "./components/MainSlide";
import Contents from "./components/Contents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <MainSlide />
            <Contents />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
