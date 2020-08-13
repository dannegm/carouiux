import React from 'react';
import Typewriter from 'typewriter-effect';

import imgHeader from '@/assets/images/img_header.png';
import NavigationBar from '@/components/NavigationBar';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

import { PageWrapper, Image, Title } from './Home.styled';

const Home = () => {
  return (
    <>
      <NavigationBar />
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
