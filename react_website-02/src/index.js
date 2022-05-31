/**
 * @filename: index.js
 * @description: 프로그램 시작점.
 *               전역 SEO 구성(Meta), 라우팅 범위를 설정(BrowserRouter)하고
 *               프로그램을 시작(App)한다.
 * @author: Lee Jaei (loveleej87@gmail.com)
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Meta from "./Meta";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Meta />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
