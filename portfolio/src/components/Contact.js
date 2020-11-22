import React from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactPage from '../components/ContactPage';
import "../styles/css/App.css"

const Contact = () => {
    return (
      <div className='Contact' id="contact">
        <ContactInfo />
        <ContactPage />
      </div>
    );
  };
  
  export default Contact;