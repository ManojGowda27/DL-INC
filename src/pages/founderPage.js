import React from 'react';
import styled from 'styled-components';
import foundersImage from '../assets/founders.jpeg'; // Replace with your actual image path
import companyImage from '../assets/company.jpg'; // Replace with your actual image path

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  margin-top: 10rem;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 800px;
  margin: 2rem auto;

`;

const FounderSection = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FounderImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.6;
`;

const CompanyImage = styled.img`
  width: 97%;
  height: 200px;
  object-fit: cover;
  padding: 10px;
`;

const VisionMissionValues = styled.div`
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Founder = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <CardContainer>
        <FounderSection>
            <FounderImage src={foundersImage} alt="Founder" />
            <Description>
            Our founder, John Doe, established the company with a vision to revolutionize the textile industry. With years of experience and a passion for quality, we are committed to delivering the best products to our customers.
            </Description>
        </FounderSection>
        <CompanyImage src={companyImage} alt="Company" />
        <VisionMissionValues>
            <SectionTitle>Vision</SectionTitle>
            <Paragraph>
            To be the global leader in textile innovation, creating sustainable and high-quality products that inspire and empower our customers.
            </Paragraph>
            <SectionTitle>Mission</SectionTitle>
            <Paragraph>
            Our mission is to provide exceptional textile solutions through continuous innovation, unmatched quality, and outstanding customer service.
            </Paragraph>
            <SectionTitle>Values</SectionTitle>
            <Paragraph>
            Integrity, quality, sustainability, and customer-centricity are the core values that drive our business. We are dedicated to upholding these principles in everything we do.
            </Paragraph>
        </VisionMissionValues>
        </CardContainer>
        </ContentContainer>
      </PageContainer>  
  );
};

export default Founder;
