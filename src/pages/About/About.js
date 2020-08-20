import React from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '../Home/components/Footer';
import { Centered } from '@/components/layout/helpers';

import {
  PageWrapper,
  AboutWrapper,
  Title,
  Text,
  Picture,
  Column,
} from './About.styled';

import carolina_picture from '@/assets/images/carolina_picture.png';

const About = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Centered>
        <AboutWrapper>
          <Column>
            <Title>About me</Title>
            <Text>
              I am Carolina Guzmán a UX UI designer. I’m always willing to learn
              new skills and confidently complete work that is assigned to me. I
              enjoy interacting with teams and starting new challenges.
            </Text>
            <Title>
              Things that put a
              <br />
              smile on me :)
            </Title>
            <Text>
              Movies, Traveling, Digital painting, watercolor and playing
              tennis.
            </Text>
          </Column>
          <Column>
            <Picture src={carolina_picture} alt="Foto de Carolina" />
          </Column>
        </AboutWrapper>
      </Centered>
      <Footer />
    </PageWrapper>
  );
};

export default About;
