import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Weaving the Future of the Web',
      'Building Digital Masterpieces',
      'Crafting High-Performance Apps',
      'Architects of the Modern Web',
    ],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <section id="hero">
      <div className="container hero__container">
        <h1>CodeSpidey</h1>
        
        <h3>
          <span>{text}</span>
          <Cursor cursorColor='var(--color-primary)' />
        </h3>
        
        <p>
          We are a design & development team crafting high-performance,
          futuristic web experiences. We build the threads that
          connect users to your brand.
        </p>
        <a href="#projects" className="cta-button">
          See Our Web
        </a>
      </div>
    </section>
  );
}

export default Hero;