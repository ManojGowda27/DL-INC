import React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import MainPage from './mainPage';
import About from './aboutPage';
import Products from './productsPage';
import Contact from './contactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh; /* Ensure the page takes full viewport height */
    overflow-y: auto; /* Enable vertical scrolling */
`;

const HomeContentContainer = styled.div`
    flex: 1; /* Take up remaining space */
    overflow-y: auto; /* Enable scrolling for content */
`;
const AboutContentContainer = styled.div`
    flex: 1; /* Take up remaining space */
    overflow-y: auto; /* Enable scrolling for content */
`;

const ProductsContentContainer = styled.div`
    flex: 1; /* Take up remaining space */
    overflow-y: auto; /* Enable scrolling for content */
`;

const ContactContentContainer = styled.div`
    flex: 1; /* Take up remaining space */
    overflow-y: auto; /* Enable scrolling for content */
`;

const LandingPage = () => {
  return (
    <PageContainer>
        <BrowserRouter>
        <Header />
        <HomeContentContainer>
            <MainPage />
        </HomeContentContainer>
        <AboutContentContainer>
            <About />
        </AboutContentContainer>
        <ProductsContentContainer>
            <Products />
        </ProductsContentContainer>
        <ContactContentContainer>
            <Contact />
        </ContactContentContainer>
        </BrowserRouter>
    </PageContainer>
    
    
  );
};

export default LandingPage;


