import React from 'react';
import Typewriter from 'typewriter-effect';

import imgHeader from '@/assets/images/img_header.png';

import { PageWrapper, Image, Title } from './Home.styled';

const Home = () => {
  return (
    <PageWrapper>
      <Image src={imgHeader} alt="" />
      <Title>Carolina Guzman</Title>
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
  );
};

export default Home;
