import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

const Mysticism = () => {
  return (
    <section className="mysticism-section py-5">
      <Container>
        <h2 className="text-center gothic-font mb-4">Mysticism & Secret Societies</h2>
        <p className="lead text-center">
          Enter the world of ancient symbols, forbidden knowledge, and secret brotherhoods that shaped the course of hidden history...
        </p>

        <div className="mt-5">
          <h4 className="gothic-font">The Hidden Library</h4>
          <p>
            Deep beneath forgotten cathedrals lie vaults filled with ancient grimoires, alchemical formulas, and symbols older than time itself.
          </p>

          <h4 className="gothic-font mt-4">The Veiled Orders</h4>
          <p>
            From the Rosicrucians to the Templars and beyond — secret societies have preserved and passed down esoteric wisdom in whispers and shadows.
          </p>

          <h4 className="gothic-font mt-4">Occult Symbols</h4>
          <p>
            Pentagrams, triquetras, ouroboros... symbols etched into stone, paper, and memory — their meanings still unfolding.
          </p>
        </div>

        <hr className="my-5 border-light" />

        <blockquote className="blockquote text-center fst-italic">
          <p>"The true secrets are never written in books — they are hidden between the lines."</p>
          <footer className="blockquote-footer text-light">Unknown Adept</footer>
        </blockquote>

        <div className="mt-5 p-4 bg-dark rounded shadow text-light">
          <h5 className="gothic-font">The Forbidden Tome</h5>
          <p>
            Legends speak of a book bound in shadowed leather, known only as *"The Black Codex"*. Said to contain incantations that can alter the fabric of reality, it was sealed away by those who feared its power. Some say it whispers to those who seek it...
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Mysticism;
