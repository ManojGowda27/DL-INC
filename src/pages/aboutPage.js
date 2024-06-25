import React from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/about.jpg'; // Replace with your actual image path

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height of the viewport */
  background-color: #f5f5f5; /* Light background color */
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex: 1; /* Take up remaining space */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const AboutGridLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AboutGridRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); /* Add shadow around the image */
  object-fit: cover; /* Ensure image covers the container */
  margin-top: 7rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const AboutSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

const AboutParagraph = styled.p`
  font-size: 1rem;
  text-align: justify;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    text-align: center;
  }
`;

const GetInTouch = styled.button`
  background-color: #9C9990;
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #CFD2B2;
    color: #4B3B47;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 15px 25px;
  }
`;

const About = () => {
  return (
    <AboutPageContainer>
      <AboutContainer>
        <AboutGridLeft>
          <AboutTitle>Our Story</AboutTitle>
          <AboutSubtitle>Discover the passion behind D-L Incentives</AboutSubtitle>
          <AboutParagraph>
            At D-L Incentives, we are devoted to providing high-quality textiles that inspire creativity and innovation. Located in Woburn, we are committed to delivering exceptional products that exceed your expectations.
          </AboutParagraph>
          <GetInTouch>Get In Touch</GetInTouch>
        </AboutGridLeft>
        <AboutGridRight>
          <AboutImage src={aboutImage} alt="About Us" />
        </AboutGridRight>
      </AboutContainer>
    </AboutPageContainer>
  );
};

export default About;
