import React from 'react';

import { PageWrapper, Image, Title } from './Home.styled';

import imgHeader from '@/assets/images/img_header.png';

const Home = () => {
  return (
    <PageWrapper>
      <Image src={imgHeader} alt="" />
      <Title>Caroline Guzman</Title>
    </PageWrapper>
  );
};

export default Home;
