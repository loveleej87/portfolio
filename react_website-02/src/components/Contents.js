/**
 * @filename: Contents.js
 * @description: data.js에서 데이터를 바로 가져와 Projects.js 및 About.js를 구성한다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from 'react';
import styled from "styled-components";

import data from '../data';
import Projects from './Projects';
import About from './About';


const ContentsContainer = styled.div`
    padding: 8px 16px;
    max-width: 1564px;
    margin-left: auto;
    margin-right: auto;

    h3 {
        color: #000;
        padding-top: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid #eee;
    }
`;

const Contents = () => {
    return (
        <ContentsContainer>
            <Projects data={data.project} />
            <About data={data.about} />
        </ContentsContainer>
    );
};

export default Contents;