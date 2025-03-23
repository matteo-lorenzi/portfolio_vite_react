// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
