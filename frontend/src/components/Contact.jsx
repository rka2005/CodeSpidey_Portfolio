import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get in Our Web</h2>
      <div className="container contact__container">
        <form className="contact__form">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="cta-button">
            Spin a Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;