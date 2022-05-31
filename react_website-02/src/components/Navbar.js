/**
 * @filename: Navbar.js
 * @description: 상단 메뉴바를 구성한다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from "react";
import styled from "styled-components";

const Top = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;

    .menu {
        width: 100%;
        overflow: hidden;
        color: #000;
        background-color: #fff;
        letter-spacing: 4px;
        padding: 8px 16px;
        box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    }

    .button {
        width: auto;
        border: none;
        display: inline-block;
        padding: 8px 16px;
        vertical-align: middle;
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        background-color: inherit;
        text-align: center;
        cursor: pointer;
        white-space: nowrap;
    }

    .button:hover {
        background-color: #909090;
    }

    .nav-right {
        float: right;
        padding: 0 16px;
    }

    .text-left {
        float: left;
        padding-left: 16px;
        padding-right: 16px;
    }

    .text-right {
        float: right;
    }
`;

const Navbar = () => {
    return (
        <Top>
            <div class="menu">
                <a href="#home" class="button">
                    <b>BR</b> Architects
                </a>
                <div class="nav-right">
                    <a href="#projects" class="button">
                        Projects
                    </a>
                    <a href="#about" class="button">
                        About
                    </a>
                    <a href="#contact" class="button">
                        Contact
                    </a>
                </div>
            </div>
        </Top>
    );
};

export default Navbar;