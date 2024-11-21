// src/components/ContactMe.js
import React from "react";

// import ContactWA from "./components/ContactWA";

function ContactMe() {
  return (
    <div>
      <h2>Contact Me</h2>
      <div class="img">
      <a href="https://www.facebook.com/jagdish.660" target="_blank" rel="noreferrer">
            <img id="imgs1" className="facebook" src="/assets/picture_social/fb.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/jagdish.660" target="_blank" rel="noreferrer"><img id="imgs2" class="instagram" src="/assets/picture_social/ig.png" alt="Instagram"></img></a>
        <a href="https://www.linkedin.com/in/jagdish660" target="_blank" rel="noreferrer"><img id="imgs3" class="linkedin" src="/assets/picture_social/linkedin.png" alt="LinkedIn"></img></a>  
        <a href="https://github.com/jagdish660" target="_blank" rel="noreferrer"><img id="imgs4" class="github" src="\assets\picture_social\github.png" alt="Github"></img></a>  
        </div>
        {/* <ContactWA/> */}
        <div class="call">
        <a href="tel:+9779803391060" >
            <img id="img_phone" className="phone" src="/assets/picture_social/phone.png" alt="Phone" /> <p>+9779803391060</p>
        </a>
        </div>  
    </div>
  );
}

export default ContactMe;
