import React from 'react';

import imgDesignThinking from '@/assets/images/img_designthinking.png';
import imgUserResearch from '@/assets/images/img_userresearch.png';
import imgVisualDesign from '@/assets/images/img_visualdesign.png';

import { Centered } from '@/components/layout/helpers';

import {
  SkillsWrapper,
  SkillsTitle,
  SkillsDescription,
  SkillsCardGrid,
  SkillsCard,
  SkillsCardImage,
  SkillsCardTitle,
  SkillsCardDescription,
} from './Skills.styled';

const Skills = () => {
  const tools = [
    'Adobe XD',
    'Axure',
    'Sketch',
    'Invision',
    'Balsamiq',
    'Zeplin',
    'Marvel App',
    'Adobe CC',
    'Visual Studio Code',
    'HTML',
    'CSS',
    'SASS',
    'JS',
    'Bootstrap',
  ];

  const skills = [
    {
      key: 'skill.designThinking',
      image: imgDesignThinking,
      title: 'Design Thinking',
      description: `
        I use the agile people-centered methodology being intrigued
        by the psychology behind not only people’s problems and behaviours,
        but also wishes and motivations.
      `,
    },
    {
      key: 'skill.userResearch',
      image: imgUserResearch,
      title: 'User Research',
      description: `
        There is no UX without User research. Applying agile methodologies
        to quick and effective user research.
      `,
    },
    {
      key: 'skill.visualDesign',
      image: imgVisualDesign,
      title: 'Visual Design',
      description: `
        I developed advanced level skills in  product design. Designing
        interfaces can range from a color decision, the shape of the icons,
        typography, buttons, forms, and even micro-interactions, always
        using atomic design as the main methodology.
      `,
    },
  ];

  return (
    <SkillsWrapper>
      <Centered>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsDescription>
          Below are the three main areas that my key strengths lie in, as well
          as software skills. For a full breakdown, please refer to my LinkedIn
          or get in touch to view my CV.
        </SkillsDescription>

        <SkillsCardGrid>
          {skills.map((skill) => (
            <SkillsCard key={skill.key}>
              <SkillsCardImage src={skill.image} alt="" />
              <SkillsCardTitle>{skill.title}</SkillsCardTitle>
              <SkillsCardDescription>{skill.description}</SkillsCardDescription>
            </SkillsCard>
          ))}
        </SkillsCardGrid>

        <SkillsTitle>Tools</SkillsTitle>
        <SkillsDescription>{tools.join(' - ')}</SkillsDescription>
      </Centered>
    </SkillsWrapper>
  );
};

export default Skills;
