import React from 'react';
import bg from '../assets/bg.jpg';
import styled from 'styled-components';



//<---------------------------------Main Page---------------------------------------------->

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
    color: #fff;
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

const MainPage = () => {
  return (
      <HomePageContainer>
        <HomeContentContainer>
          <HomeIntro>
            <HomeFrame>
              <HomeTitle>D-L INCentives</HomeTitle>
              <HomeSubtitle>
                D-L INCentives is a wholesale distributor of top brand name apparel. We have been servicing the needs of our customers over the past thirty years. Our customers include other distributors as well as many of the top retailers around the world. Please feel free to browse our site to learn more about many of the products and services that we may be able to offer you and your company.
              </HomeSubtitle>
              <HomeButton>View Products</HomeButton>
            </HomeFrame>
          </HomeIntro>
        </HomeContentContainer>
      </HomePageContainer>
  );
};

export default MainPage;
