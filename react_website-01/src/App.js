import React from 'react';
import styled from 'styled-components';
import Meta from './Meta';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer';

const Container = styled.div`
    font-family: 'Times New Roman', Georgia, Serif;
    line-height: 1.5;
`;

const App = () => {
    return (
        <div>
            <Container>      
                <Meta />   
                <Navbar />
                <Main />
                <Footer />
            </Container>
        </div>
    );
};

export default App;