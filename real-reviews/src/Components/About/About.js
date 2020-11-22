import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Picture from '../About/SuperCroppedHead.png';
import './About.css';

const About = () => {

  const name = 'Dakota Locke'
  const [display] = useState(); //Hook #2

  return (
    <Container>
      <section className='my-big-head'>
        <img className='picture' alt='Dakota Locke' src={Picture} />
      </section>
      <p className='paragraph'>          Hi there, my name is {name}. Also known to some by RandomPromptthoughts. I'm the creator and founder of this website, I have always enjoyed reading articles and reviews online but feel as though some communities are quite biased. Now you can create your own personal reviews for games and share them among other users. No more big corporations. Just you and others sharing your own opinions. Real people, real gamers.
          I hope you're enjoying Real Reviews!</p>

      <div className='icons-body'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </Container>


  );
}

export default About;