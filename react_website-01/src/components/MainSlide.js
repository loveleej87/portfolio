import React from "react";
import styled from "styled-components";
import Image from "../assets/image/hamburger.jpg";

const Slide = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1600px;
    min-width: 500px;
    max-height: 800px;
    position: relative;

    img {
        max-width: 100%;
        height: auto;
    }

    .text {
        position: absolute;
        padding: 0 36px;
        left: 0;
        bottom: 0;
    }

    h1 {
        font-family: "Playfair Display";
        letter-spacing: 4px;
        font-size: 36px;
        opacity: 0.6;
    }
`;

const MainSlide = () => {
    return (
        <Slide>
            <img src={Image} alt="Hamburger" />
            <div className="text">
                <h1>Le Catering</h1>
            </div>
        </Slide>
    );
};

export default MainSlide;
