/**
 * @filename: Projects.js
 * @description: Projects 섹션을 구성하고, max-width와 min-width에 따라 컨텐츠의 크기가 변경된다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
    div#project {
        padding: 0.01em 16px;
        padding-top: 32px;
        padding-bottom: 32px;
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
        }

        div {
            position: relative;
            padding-bottom: 10px;
            padding: 0 8px;
            margin-bottom: 8px;

            p {
                position: absolute;
                color: #fff;
                background-color: #000;
                width: fit-content;
                padding: 8px 16px;
                margin: 0;
            }

            img {
                width: 100%;
            }
        }
    }
`;

const Projects = (props) => {
    return (
        <ProjectsContainer>
            <div id="project">
                <h3>Projects</h3>
            </div>
            <ul>
                {props.data.map((v, i) => {
                    return (
                        <li>
                            <div>
                                <p>{v.subject}</p>
                                <img src={v.img} alt={v.subject} />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </ProjectsContainer>
    );
};

export default Projects;
