import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import productImage1 from '../assets/Products/RA.jpg'; 
import productImage2 from '../assets/Products/BA.jpg';
import productImage3 from '../assets/Products/JEMM.jpeg';
import productImage4 from '../assets/Products/NE.jpeg';
import productImage5 from '../assets/Products/SA.jpeg';

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh; /* Ensure the page takes full viewport height */
`;

const ProductContentContainer = styled.div`
  flex: 1; /* Take up remaining space after header */
  padding: 2rem;
  margin-top: 7rem;
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProductSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

const ProductParagraph = styled.p`
  font-size: 1rem;
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ProductCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 1rem;

  &:hover {
    transform: scale(1.05); /* Grow card size on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
  }
`;

const ProductCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductCardContent = styled.div`
  padding: 1rem;
`;

const ProductCardTitle = styled(NavLink)`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-bottom: 0.5rem;
  display: block;

  &:hover {
    color: red;
  }
`;

const ProductCardDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Products = () => {
  return (
    <ProductPageContainer>
      <ProductContentContainer>
        <ProductTitle>Explore our textile collection</ProductTitle>
        <ProductSubtitle>Unmatched quality and variety</ProductSubtitle>
        <ProductParagraph>
        Find a diverse range of premium textiles that cater to all your needs. From luxurious fabrics to durable materials, we have it all.
        </ProductParagraph>
        <ProductCardContainer>
          <ProductCard>
            <ProductCardImage src={productImage1} alt="Russell Athletic Apparell" />
            <ProductCardContent>
              <ProductCardTitle to="/product/1">Russell Athletic</ProductCardTitle>
              <ProductCardDescription>
                First Quality and Irregular apparel from Russell Athletic.
              </ProductCardDescription>
            </ProductCardContent>
          </ProductCard>

          <ProductCard>
            <ProductCardImage src={productImage2} alt="Bike Athletic Apparell" />
            <ProductCardContent>
              <ProductCardTitle to="/product/2">Bike Athletic</ProductCardTitle>
              <ProductCardDescription>
                This is a brief description of product 2. Stylish and comfortable for any occasion.
              </ProductCardDescription>
            </ProductCardContent>
          </ProductCard>

          <ProductCard>
            <ProductCardImage src={productImage3} alt="J.E. Morgan Apparell" />
            <ProductCardContent>
              <ProductCardTitle to="/product/3">J.E. Morgan Mills</ProductCardTitle>
              <ProductCardDescription>
                Heavyweight and lightweight thermals and union suits from Hanes and J.E.Morgan.
              </ProductCardDescription>
            </ProductCardContent>
          </ProductCard>

          <ProductCard>
            <ProductCardImage src={productImage4} alt="New Era Caps" />
            <ProductCardContent>
              <ProductCardTitle to="/product/4">New Era</ProductCardTitle>
              <ProductCardDescription>
                Licensed hats from the NBA, MLB, NFL, NHL, and NCAA.
              </ProductCardDescription>
            </ProductCardContent>
          </ProductCard>

          <ProductCard>
            <ProductCardImage src={productImage5} alt="Southern Athletic Apparell" />
            <ProductCardContent>
              <ProductCardTitle to="/product/5">Southern Athletic</ProductCardTitle>
              <ProductCardDescription>
                Find Apparell collection from Southern Athletic.
              </ProductCardDescription>
            </ProductCardContent>
          </ProductCard>

        </ProductCardContainer>
      </ProductContentContainer>
    </ProductPageContainer>
  );
};

export default Products;
