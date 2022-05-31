/**
 * @filename: About.js
 * @description: About 섹션을 구성하고, max-width와 min-width에 따라 컨텐츠의 크기가 변경된다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutContainer = styled.div`
    div#about {
        padding: 0.01em 16px;
        padding-top: 32px;
    }
    
    .opacity {
        opacity: 0.75;
    }

    p {
        color: #000;
        width: fit-content;
        padding: 8px 16px;
        margin: 0;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 0;
        padding: 8px;

        li {
            @media (min-width: 601px) {
                width: 49.99999%;
            }

            @media (min-width: 993px) {
                width: 24.99999%;
            }

            padding: 0 8px;
            padding-bottom: 16px;
            margin-bottom: 8px;
        }
            img {
                width: 100%;
                filter: grayscale(70%);
            }

            h2 {
                padding-bottom: 8px;
            }

            p {
                padding: 0;
                padding-bottom: 16px;
            }
        }

    .button {
        border: none;
        width: 100%;
        padding: 8px 16px;
        overflow: hidden;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        color: #000;
        background-color: #f1f1f1;
        font: inherit;
        user-select: none;
        -webkit-appearance: button;

        &:hover {
            background-color: #999999;
        }
    }
`;

const About = (props) => {
    return (
        <AboutContainer>
            <div id="about">
                <h3>About</h3>
            </div>
            <p>{props.data.content}</p>
            <ul>
                {props.data.member.map((v, i) => {
                    return (
                        <li>
                            <img src={v.img} alt={v.name} />
                            <h2>{v.name}</h2>
                            <p className="opacity">{v.position}</p>
                            <p>{v.desc}</p>
                            <Link to="#" className="button">
                                Contact
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </AboutContainer>
    );
};

export default About;
