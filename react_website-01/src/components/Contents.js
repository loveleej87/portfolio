import React from "react";
import styled from "styled-components";
import Image2 from "../assets/image/tablesetting2.jpg";
import Image3 from "../assets/image/tablesetting.jpg";

const Content2 = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 980px;

    .row::after,
    .row::before {
        content: "";
        display: table;
        clear: both;
    }

    .padding {
        padding-top: 64px;
        padding-bottom: 64px;
    }

    .section {
        padding: 12px 24px;
        box-sizing: border-box;
        float: left;
        width: 50%;
    }

    .image2 {
        max-width: 100%;
        height: auto;
    }

    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }

    h1 {
        font-size: 36px;
        color: #000;
    }

    h3 {
        font-family: "Playfair Display";
        letter-spacing: 4px;
    }

    hr {
        border: 0;
        border-top: 1px solid #eee;
        margin: 20px 0;
    }

    .center {
        text-align: center;
        font-family: "Playfair Display";
        letter-spacing: 4px;
    }

    .catering {
        text-align: left;
        font-size: 18px;
    }

    .tag {
        display: inline-block;
        padding-left: 8px;
        padding-right: 8px;
        text-align: center;
        color: #000;
        background-color: #f1f1f1;
    }

    .color {
        color: grey;
    }
`;

const Contents = () => {
    return (
        <Content2>
            <div className="row padding">
                <div className="section">
                    <img
                        src={Image2}
                        alt="table setting"
                        className="image2"
                        width={"600px"}
                        height={"750px"}
                    />
                </div>

                <div className="section">
                    <h1 className="center">About Catering</h1>
                    <br />
                    <h3 class="center">Tradition since 1889</h3>
                    <div className="catering">
                        <p>
                            The Catering was founded in blabla by Mr. Smith in
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute iruredolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. We only use
                            <span class="tag"> seasonal </span>
                            ingredients.
                        </p>
                        <p class="color">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum consectetur adipiscing elit, sed do eiusmod
                            temporincididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </div>
                </div>
            </div>
            <hr />

            <div className="row padding">
                <div className="section">
                    <h1 class="center">Our Menu</h1>
                    <br />
                    <h3>Bread Basket</h3>
                    <p class="color">
                        Assortment of fresh baked fruit breads and muffins 5.50
                    </p>
                    <br />
                    <h3>Honey Almond Granola with Fruits</h3>
                    <p class="color">
                        Natural cereal of honey toasted oats, raisins, almonds
                        and dates 7.00
                    </p>
                    <br />
                    <h3>Belgian Waffle</h3>
                    <p class="color">
                        Vanilla flavored batter with malted flour 7.50
                    </p>
                    <br />
                    <h3>Scrambled eggs</h3>
                    <p class="color">
                        Scrambled eggs, roasted red papper and garlic, with
                        green onions 7.50
                    </p>
                    <br />
                    <h3>Blueberry Pancakes</h3>
                    <p class="color">
                        With syrup, butter and lots of berries 8.50
                    </p>
                </div>
                <div className="section">
                    <img src={Image3} alt="menu" className="image2" />
                </div>
            </div>
            <hr />
        </Content2>
    );
};

export default Contents;
