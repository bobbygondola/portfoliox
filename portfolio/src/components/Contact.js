import React from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactPage from '../components/ContactPage';

const Contact = () => {
    return (
      <div className='Contact' id="contact">
        <ContactInfo />
        <ContactPage />
      </div>
    );
  };
  
  export default Contact;