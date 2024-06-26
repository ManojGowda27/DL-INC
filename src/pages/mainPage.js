import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../assets/bg.jpg'; // Replace with your background image path
import aboutImage from '../assets/about.jpg'; // Replace with your actual image path

// Styles for Main Page
const CombinedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh; /* Full viewport height */
  background: url(${bg}) no-repeat center center/cover; /* Apply background image */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HomeContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative; /* Ensures absolute children are positioned relative to this container */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1); /* Optional: semi-transparent overlay for readability */
  z-index: 1; /* Ensure this is behind the header */
`;

const HomeIntro = styled.div`
  width: 40%; /* Adjust width as needed */
  margin: 1rem;
  color: white; /* Change to white for better contrast */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent background for readability */
  border-radius: 8px; /* Optional: Rounded corners */

  @media (max-width: 1000px) and (min-width: 768px) {
    width: 60%;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 70%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;
  }

  @media (max-height: 650px) {
    margin-top: 2rem; /* Add top margin to prevent overlapping */
  }

  @media (max-height: 550px) {
    margin-top: 4rem; /* Increase top margin for smaller heights */
  }

  @media (max-height: 450px) {
    margin-top: 6rem; /* Increase top margin for even smaller heights */
  }

  @media (max-height: 650px) {
    align-self: center; /* Center the intro */
    justify-content: center; /* Center content */
  }
`;

const HomeFrame = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  @media (max-height: 650px) {
    padding: 1.5rem; /* Adjust padding for smaller heights */
  }

  @media (max-height: 550px) {
    padding: 1rem; /* Further adjust padding for even smaller heights */
  }

  @media (max-height: 450px) {
    padding: 0.5rem; /* Further adjust padding for even smaller heights */
  }
`;

const HomeTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #9C9990;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }

  @media (max-height: 650px) {
    font-size: 32px; /* Adjust font size for smaller heights */
  }

  @media (max-height: 550px) {
    font-size: 28px; /* Further adjust font size for even smaller heights */
  }

  @media (max-height: 450px) {
    font-size: 24px; /* Further adjust font size for even smaller heights */
  }
`;

const HomeSubtitle = styled.p`
  font-size: 20px;
  text-align: justify;
  margin: 0;
  color: #A9A899;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-height: 650px) {
    font-size: 18px; /* Adjust font size for smaller heights */
  }

  @media (max-height: 550px) {
    font-size: 16px; /* Further adjust font size for even smaller heights */
  }

  @media (max-height: 450px) {
    font-size: 14px; /* Further adjust font size for even smaller heights */
  }
`;

const HomeButton = styled.button`
  background-color: #333;
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #CFD2B2;
    color: black;
  }

  @media (max-width: 768px) {
    padding: 15px 25px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
  }

  @media (max-height: 650px) {
    padding: 15px 25px; /* Adjust padding for smaller heights */
  }

  @media (max-height: 550px) {
    padding: 10px 20px; /* Further adjust padding for even smaller heights */
  }

  @media (max-height: 450px) {
    padding: 5px 15px; /* Further adjust padding for even smaller heights */
  }
`;


// Styles for About Page
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

const MainPage = () => {
  const navigate = useNavigate(); // Ensure to invoke useNavigate() here

  const viewProductsClick =() => {
    navigate('/products')
  }

  const handleGetInTouchClick = () => {
    // Navigate to the Contact page when button is clicked
    navigate('/contact');
  };

  return (
    <CombinedPageContainer>
      <HomePageContainer>
        <HomeContentContainer>
          <HomeIntro>
            <HomeFrame>
              <HomeTitle>D-L INCentives</HomeTitle>
              <HomeSubtitle>
                D-L INCentives is a wholesale distributor of top brand name apparel. We have been servicing the needs of our customers over the past thirty years. Our customers include other distributors as well as many of the top retailers around the world. Please feel free to browse our site to learn more about many of the products and services that we may be able to offer you and your company.
              </HomeSubtitle>
              <HomeButton onClick={viewProductsClick}>View Products</HomeButton>
            </HomeFrame>
          </HomeIntro>
        </HomeContentContainer>
      </HomePageContainer>
      <AboutPageContainer>
        <AboutContainer>
          <AboutGridLeft>
            <AboutTitle>Our Story</AboutTitle>
            <AboutSubtitle>Discover the passion behind D-L Incentives</AboutSubtitle>
            <AboutParagraph>
              At D-L Incentives, we are devoted to providing high-quality textiles that inspire creativity and innovation. Located in Woburn, we are committed to delivering exceptional products that exceed your expectations.
            </AboutParagraph>
            <GetInTouch onClick={handleGetInTouchClick}>Get In Touch</GetInTouch>
          </AboutGridLeft>
          <AboutGridRight>
            <AboutImage src={aboutImage} alt="About Us" />
          </AboutGridRight>
        </AboutContainer>
      </AboutPageContainer>
    </CombinedPageContainer>
  );
};

export default MainPage;
