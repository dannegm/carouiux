import React, { useRef } from 'react';

import Navbar from '@/components/layout/Navbar';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Collaborators from './components/Collaborators';
import Footer from './components/Footer';

import { PageWrapper } from './Home.styled';

const Home = () => {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageWrapper>
      <Navbar
        onSkillsClick={(e) => scrollTo(skillsRef)}
        onProjectsClick={(e) => scrollTo(projectsRef)}
      />
      <Hero />
      <div ref={skillsRef} />
      <Skills />
      <div ref={projectsRef} />
      <Projects />
      <Collaborators />
      <Footer />
    </PageWrapper>
  );
};

export default Home;
