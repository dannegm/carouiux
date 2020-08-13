import React from 'react';
import Navbar from '@/components/layout/Navbar';

import Hero from './components/Hero';
import Skills from './components/Skills';

import { PageWrapper } from './Home.styled';

const Home = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <Skills />
    </PageWrapper>
  );
};

export default Home;
