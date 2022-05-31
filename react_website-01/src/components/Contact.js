import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 980px;

    h1 {
        font-family: "Playfair Display";
        letter-spacing: 4px;
    }

    .padding {
        padding-top: 64px;
        padding-bottom: 64px;
    }

    .padding-16 {
        padding-top: 16px;
        padding-bottom: 16px;
    }

    .contact-color {
        color: #607d8b !important;
    }
    .input {
        padding: 8px;
        display: block;
        border: none;
        border-bottom: 1px solid #ccc;
        width: 100%;
        font: inherit;
        margin: 0;
    }

    .button {
        margin-top: 16px;
        margin-bottom: 16px;
        color: #000;
        background-color: #f1f1f1;
        width: auto;
        border: none;
        display: inline-block;
        padding: 8px 16px;
        vertical-align: middle;
        overflow: hidden;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        white-space: nowrap;
    }

    .button:hover {
        color: #000 !important;
        background-color: #ccc !important;
    }
`;

const Contact = () => {
    return (
        <Container>
            <div className="padding">
                <h1>Contact</h1>
                <br />
                <p>
                    We offer full-service catering for any event, large or
                    small. We understand your needs and we will cater the food
                    to satisfy the biggerst criteria of them all, both look and
                    taste. Do not hesitate to contact us.
                </p>
                <p className="contact-color">
                    <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
                </p>
                <p>
                    You can also contact us by phone 00553123-2323 or email
                    catering@catering.com, or you can send us a message here:
                </p>
                <form>
                    <p>
                        <input
                            className="input padding-16"
                            type="text"
                            placeholder="Name"
                            required
                            name="Name"
                        />
                    </p>
                    <p>
                        <input
                            className="input padding-16"
                            type="number"
                            placeholder="How many people"
                            required
                            name="People"
                        />
                    </p>
                    <p>
                        <input
                            className="input padding-16"
                            type="datetime-local"
                            placeholder="Date and time"
                            required
                            name="date"
                            value="2020-11-16T20:00"
                        />
                    </p>
                    <p>
                        <input
                            className="input padding-16"
                            type="text"
                            placeholder="Message \ Special requirements"
                            required
                            name="Message"
                        />
                    </p>
                    <button className="button" type="submit">
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </Container>
    );
};

export default Contact;
