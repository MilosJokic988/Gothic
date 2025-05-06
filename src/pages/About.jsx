import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
const About = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <h2 className="text-center gothic-font mb-4">About This Site</h2>
        <p className="lead text-center">
          A journey into the mysterious, the occult, and the gothic world that has inspired centuries of art, literature, and mystery.
        </p>
        <div className="mt-5">
          <h4 className="gothic-font">The Inspiration</h4>
          <p>
            This site was born out of a passion for the darker side of history and myth. From the enigmatic symbols of secret societies to the ancient castles and churches, the gothic world is rich in mystery and allure.
          </p>

          <h4 className="gothic-font mt-4">The Goal</h4>
          <p>
            The goal of this site is to provide a space where enthusiasts of gothic culture, occult mysteries, and historical enigmas can come together and explore the unknown.
          </p>
          <h4 className="gothic-font mt-4">The Vision</h4>
<p>
  To create a digital sanctuary for seekers of the arcane — a place where knowledge hides between lines, and inspiration rises from the shadows of forgotten lore.
</p>
<h4 className="gothic-font mt-4">The Philosophy</h4>
<p>
  At the heart of this site lies the belief that the past is never truly gone; it whispers to us from forgotten corners, urging us to listen and explore. Every symbol, every legend, every story is a thread that connects us to a deeper understanding of the universe.
</p>

<h4 className="gothic-font mt-4">The Community</h4>
<p>
  We invite like-minded souls to join us in this journey — to share ideas, discuss ancient texts, and uncover truths buried in time. Whether you are a scholar, an artist, or simply a seeker of the unknown, there is a place for you here.
</p>
        </div>
      </Container>
    </section>
  );
};

export default About;
