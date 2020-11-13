import React from 'react';
import { Container } from 'react-bootstrap';
import { Picture } from '../About/Super cropped head.png';
import './About.css';

const About = () => {
    return(
      <Container>
        <section className='my-big-head'>
          <img className='picture' src={Picture}

          />
        </section>
          <p className='paragraph'>About Component hehaind llsiddn lgone pcknfe lsi hiemap hase</p>
            
      </Container>
      
    );
}

export default About;