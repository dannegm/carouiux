import React from 'react';
import Navbar from '@/components/layout/Navbar';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Collaborators from './components/Collaborators';
import Footer from './components/Footer';

import { PageWrapper } from './Home.styled';

const Home = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <Skills />
      <Collaborators />
      <Footer />
    </PageWrapper>
  );
};

export default Home;
