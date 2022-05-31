/**
 * @filename: MainSlide.js
 * @description: 대문 화면을 구성한다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from "react";
import styled from "styled-components";
import Architect from "../assets/img/architect.jpg";

const Container = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;

    img {
        vertical-align: middle;
        border-style: none;
        max-width: 100%;
        height: auto;
    }

    .fontArea {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: 16px;
        transform: translate(-50%, -50%);
        text-align: center;
        vertical-align: middle;
    }

    .title {
        color: #fff;
        font-size: 36px;
        letter-spacing: 4px;
    }

    .title1 {
        opacity: 0.75;
        padding: 8px 16px;
        text-align: center;
        background-color: #000;
        padding: 8px 16px;
    }

    .title2 {
        opacity: 0.75;
        padding: 8px 16px;
    }
`;

const MainSlide = () => {
    return (
        <Container id="home">
            <img src={Architect} alt="Architecture" />
            <div className="fontArea">
                <h1 className="title">
                    <span className="title1">
                        <b>BR</b>
                    </span>
                    <span className="title2">Architects</span>
                </h1>
            </div>
        </Container>
    );
};

export default MainSlide;
