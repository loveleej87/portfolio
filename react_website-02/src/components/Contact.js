/**
 * @filename: Contact.js
 * @description: Contact 섹션을 구성한다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from "react";
import styled from "styled-components";
import MapImg from "../assets/img/map.jpg";

const ContactContainer = styled.div`
    padding: 8px 16px;
    max-width: 1564px;
    margin-left: auto;
    margin-right: auto;

    .map {
            padding: 0.01em 16px;
            margin-left: auto;
            margin-right: auto;

            img {
                width: 100%;
            }
        }

    div#contact {
        padding: 0.01em 16px;
        padding-top: 32px;
        padding-bottom: 32px;

        h3 {
            color: #000;
            padding-top: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid #eee;
        }

        input {
            padding: 8px;
            display: block;
            width: 100%;
            overflow: visible;
            font: inherit;
            border: 1px solid #ccc;
        }

        input:nth-child(n + 1):nth-child(-n + 3) {
            margin-top: 16px;
            margin-bottom: 16px;
        }

        .sendbutton {
            border: none;
            padding: 8px 16px;
            overflow: hidden;
            text-decoration: none;
            text-align: center;
            cursor: pointer;
            white-space: nowrap;
            text-transform: none;
            font: inherit;
            user-select: none;
            margin-top: 16px !important;
            margin-bottom: 16px !important;
            color: #fff;
            background-color: #000;
        }
    }
`;

const Contact = () => {
    return (
        <ContactContainer>
            <div id="contact">
                <h3>Contact</h3>
                <p>Lets get in touch and talk about your next project.</p>
                <form action="/action_page.php" target="_blank">
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        name="Name"
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        name="Name"
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        name="Name"
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        name="Name"
                    />
                    <button className="sendbutton" type="submit">
                        <i>SEND MESSAGE</i>
                    </button>
                </form>
            </div>
            <div className="map">
                <img src={MapImg} alt="MapImage" />
            </div>

        </ContactContainer>
    );
};

export default Contact;
