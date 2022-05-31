/**
 * @filename: Footer.js
 * @description: Footer 섹션을 구성한다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Bottom = styled.div`
    color: #fff;
    background-color: #000;
    width: 100%;
    padding-top: 32px;
    padding-bottom: 32px;
    text-align: center;

    .hovertext,
    .hovertext:visited  {
        color: #fff;
    }

    .hovertext:hover {
        color: green;
    }
`;

const Footer = () => {
    return (
        <Bottom>
            <p>
            Powered by&nbsp;
                <Link to='https://www.w3schools.com/w3css/default.asp' title='W3.CSS' target='_blank' class='hovertext'>w3.css
                </Link>
            </p>
        </Bottom>
    );
};

export default Footer;