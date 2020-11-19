import React from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_bczolfw', 'template_lj566lp', e.target, 'user_hQPixskBNwkloxn3oefOy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>

      <input type="subject" name="subject" />

      <input type="text" name="from_name" placeholder="Name"/>

      <input type="email" name="reply_to" placeholder="Email" />

      <textarea type="text" name="message" placeholder="Send me an email! Its fast and easy!"/>
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactPage;