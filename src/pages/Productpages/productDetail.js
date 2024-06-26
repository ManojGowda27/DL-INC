import React, { useState } from 'react';
import styled from 'styled-components';

// Placeholder images
import image1 from '../../assets/Products/RA.jpg';
import image2 from '../../assets/Products/SA.jpeg';
import image3 from '../../assets/Products/BA.jpg';

const ProductDetailContainer = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 1rem;
  margin-top: 10rem;
  margin-left: 5rem;
`;

const LeftGrid = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid gray;
  padding: 1rem;
`;

const MainProductImage = styled.img`
  width: 100%; /* 80% width of the LeftGrid */
  height: auto;
`;

const ProductImages = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProductImageButton = styled.button`
  background: none;
  border: 1px solid gray;
  padding: 0;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100px; /* Adjust as needed */
  height: 100px;
`;

const RightContainer = styled.div`
  flex: 1;
  padding: 0 2rem;
  justify-content: center;
  align-items:center;
`;

const ProductTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  margin-top: 10rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  margin-left: 2rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 2rem;
`;

const ProductDetailPage = () => {
  const [mainImage, setMainImage] = useState(image1); // State to track main image

  const handleImageClick = (newImage) => {
    setMainImage(newImage); // Update main image on click
  };

  return (
    <div>
      <ProductDetailContainer>
        <LeftGrid>
          <MainProductImage src={mainImage} alt="Main Product" />
          <ProductImages>
            <ProductImageButton onClick={() => handleImageClick(image1)}>
              <ProductImage src={image1} alt="Product Image 1" />
            </ProductImageButton>
            <ProductImageButton onClick={() => handleImageClick(image2)}>
              <ProductImage src={image2} alt="Product Image 2" />
            </ProductImageButton>
            <ProductImageButton onClick={() => handleImageClick(image3)}>
              <ProductImage src={image3} alt="Product Image 3" />
            </ProductImageButton>
          </ProductImages>
        </LeftGrid>
        <RightContainer>
          <ProductTitle>Product Title</ProductTitle>
          <ProductDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a consequat nec, sagittis vel justo. Fusce nec aliquet nunc.
          </ProductDescription>
          <ProductPrice>$99.99</ProductPrice>
        </RightContainer>
      </ProductDetailContainer>
    </div>
  );
};

export default ProductDetailPage;
