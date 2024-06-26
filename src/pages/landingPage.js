import React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import MainPage from './mainPage';
import Products from './productsPage';
import Contact from './contactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Founder from './founderPage';
import ProductDetailPage from './Productpages/productDetail';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh; /* Ensure the page takes full viewport height */
    overflow-y: auto; /* Enable vertical scrolling */
`;

const ContentContainer = styled.div`
    flex: 1; /* Take up remaining space */
    overflow-y: auto; /* Enable scrolling for content */
`;

const LandingPage = () => {
  return (
    <PageContainer>
      <BrowserRouter>
        <Header />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<Founder />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/russell-athletic" element={<ProductDetailPage />} />
            <Route path="/bike-athletic" element={<ProductDetailPage />} />
            <Route path="/jemm" element={<ProductDetailPage />} />
            <Route path="/new-era" element={<ProductDetailPage />} />
            <Route path="/southern-athletic" element={<ProductDetailPage />} />
          </Routes>
        </ContentContainer>
      </BrowserRouter>
    </PageContainer>
  );
};

export default LandingPage;
