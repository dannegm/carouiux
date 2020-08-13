import React from 'react';
import Typewriter from 'typewriter-effect';

import imgHeader from '@/assets/images/img_header.png';
import Navbar from '../../components/Navbar/Navbar';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';

import { PageWrapper, Image, Title } from './Home.styled';

const Home = () => {
  return (
    <>
      <Navbar/>
      <PageWrapper>
        <Image src={imgHeader} alt="" />
        <Title>I'm Carolina</Title>
        <Typewriter
          options={{
            strings: ['User Experience Designer', 'User Interface Designer'],
            autoStart: true,
            delay: 50,
            deleteSpeed: 10,
            loop: true,
          }}
        />
      </PageWrapper>
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
