import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'; 
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh; /* Ensure the page takes full viewport height */
`;

const ContactContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse; /* Reverse the order for smaller screens */
  justify-content: space-around;
  padding: 2rem;
  margin-top: 8rem;
  
  @media (min-width: 768px) {
    flex-direction: row; /* Default row layout for larger screens */
  }
`;

const ContactLeftGrid = styled.div`
  flex: 1;
  padding: 1rem;
  background: white;
`;

const ContactRightGrid = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ContactSectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContactSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

const ContactParagraph = styled.p`
  font-size: 1rem;
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactFormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ContactInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ContactTextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const ContactGoogleMapCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  height: 300px;
`;

const ContactButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #9C9990;
  color: white;
  cursor: pointer;
  align-self: flex-start; /* Align the button to the left */
  
  &:hover {
    background-color: #CFD2B2;
    color: #4B3B47;
  }
`;

const ContactEmailSection = styled.div`
  margin-top: 3rem;
`;

const ContactEmailTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContactEmailSubtitle = styled.span`
  display: flex;
  align-items: center;
  font-weight: normal;
  margin-bottom: 1.5rem;
`;

const ContactEmailIcon = styled.span`
  font-size: 1rem;
  margin-right: 10px;
`;

const ContactmapContainerStyle = {
  width: '100%',
  height: '100%',
};

const Contactcenter = {
  lat: 42.51842,
  lng: -71.13939,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      inquiry: e.target.inquiry.value,
    };

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        const errorText = await response.text();
        console.error('Failed to send email:', errorText);
        alert(`Failed to send email: ${errorText}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <ContactPageContainer>
      <ContactContentContainer>
        <ContactLeftGrid>
          <ContactSectionTitle>Get in touch</ContactSectionTitle>
          <ContactSubtitle>Let's discuss your textile needs</ContactSubtitle>
          <ContactParagraph>
            Reach out to us today to start a conversation about how we can meet your textile requirements. Your satisfaction is our priority.
          </ContactParagraph>
          <ContactForm onSubmit={handleSubmit}>
            <ContactFormGroup>
              <ContactLabel htmlFor="name">Name</ContactLabel>
              <ContactInput type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </ContactFormGroup>
            
            <ContactFormGroup>
              <ContactLabel htmlFor="email">Email</ContactLabel>
              <ContactInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </ContactFormGroup>
            
            <ContactFormGroup>
              <ContactLabel htmlFor="phone">Phone</ContactLabel>
              <ContactInput type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </ContactFormGroup>

            <ContactFormGroup>
              <ContactLabel htmlFor="inquiry">Inquiry</ContactLabel>
              <ContactTextArea id="inquiry" name="inquiry" value={formData.inquiry} onChange={handleChange} rows="4" required></ContactTextArea>
            </ContactFormGroup>
            
            <ContactButton type="submit">Submit</ContactButton>
          </ContactForm>
        </ContactLeftGrid>
        <ContactRightGrid>
          <ContactGoogleMapCard>
            <LoadScript
                googleMapsApiKey="API-KEY"
                >
                <GoogleMap
                    mapContainerStyle={ContactmapContainerStyle}
                    center={Contactcenter}
                    zoom={13}
                >
                </GoogleMap>
                </LoadScript>
            {/* Placeholder for Google Maps integration */}
            Google Maps
          </ContactGoogleMapCard>
          <ContactEmailSection>
            <ContactEmailTitle>Email</ContactEmailTitle>
            <ContactEmailSubtitle>
              <ContactEmailIcon><FaEnvelope /></ContactEmailIcon>info@dlincentives.com
            </ContactEmailSubtitle>
          </ContactEmailSection>

          <ContactEmailSection>
            <ContactEmailTitle>Phone</ContactEmailTitle>
            <ContactEmailSubtitle>
              <ContactEmailIcon><FaPhone /></ContactEmailIcon>+1(978)741-4077
            </ContactEmailSubtitle>
          </ContactEmailSection>

          <ContactEmailSection>
            <ContactEmailTitle>Address</ContactEmailTitle>
            <ContactEmailSubtitle>
              <ContactEmailIcon><FaLocationArrow /></ContactEmailIcon>130 Commerce Way Woburn MA - 01801 United States
            </ContactEmailSubtitle>
          </ContactEmailSection>
        </ContactRightGrid>
      </ContactContentContainer>
    </ContactPageContainer>
  );
};

export default Contact;
