import React from 'react';

import Typewriter from 'typewriter-effect';

import imgHeader from '@/assets/images/hero.png';

import { Centered } from '@/components/layout/helpers';

import {
  HeroWrapper,
  HeroContainer,
  HeroImage,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from './Hero.styled';

const Hero = () => {
  const phrases = ['User Experience Designer', 'User Interface Designer'];
  return (
    <HeroWrapper>
      <Centered>
        <HeroContainer>
          <HeroImage src={imgHeader} alt="Carolina's picture" />
          <HeroContent>
            <HeroTitle>
              I’m Carolina,
              <Typewriter
                options={{
                  strings: phrases,
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 10,
                  loop: true,
                }}
              />
            </HeroTitle>
            <HeroSubtitle>based in Guadalajara, México</HeroSubtitle>
          </HeroContent>
        </HeroContainer>
      </Centered>
    </HeroWrapper>
  );
};

export default Hero;
