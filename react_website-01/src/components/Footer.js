import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bottom = styled.div`
    background-color: #f1f1f1;
    width: 100%;
    padding-top: 32px;
    padding-bottom: 32px;
    text-align: center;
    margin: 0;

    &.hover {
        color: #000;
        background-color: #ccc;
    }

    .hoverText:hover {
        color: green;
    }
`;

const Footer = () => {
    return (
        <Bottom>
            <p>
                Powered by&nbsp;
                <Link to='https://www.w3schools.com/w3css/default.asp' title='W3.CSS' target='_blank' class='hoverText'>w3.css</Link>
            </p>
        </Bottom>
    );
};

export default Footer;