import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TopMenu = styled.div`
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
`;

const Bar = styled.div`
    overflow: hidden;
    padding: 8px 16px;
    color: #000;
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    .nav-right {
        float: right;
    }
    
    .button {
        font-family: "Time New Roman", Georgia, Serif;
        letter-spacing: 4px;
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
`;

const Navbar = () => {
    return (
        <TopMenu>
            <Bar>
                <NavLink to='#' className='button'>Gourmet au Catering</NavLink>
                <div className='nav-right'>
                    <NavLink to='#' className='button'>About</NavLink>
                    <NavLink to='#' className='button'>Menu</NavLink>
                    <NavLink to='#' className='button'>Contact</NavLink>
                </div>
            </Bar>
        </TopMenu>
    );
};

export default Navbar;