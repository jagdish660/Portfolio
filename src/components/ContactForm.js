import React from 'react';
import './contact.css';

function ContactForm() {
  return (
    <div class="center-div">
        <div class="form">
        <form action="mailto:jghimire660@gmail.com" method="POST" enctype="text/plain">
      {/* <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" required /><br /><br /> */}

      <label htmlFor="email">Your Email:</label><br />
      <input type="email" id="email" name="email" required /><br /><br />

      <label htmlFor="message">Message:</label><br />
      <textarea id="message" name="message" rows="5" required></textarea><br /><br />

      <input id="submit" type="submit" value="Send Message" />
    </form>
    </div>
    </div>
  );
}


export default ContactForm;
