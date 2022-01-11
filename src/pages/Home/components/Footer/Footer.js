/* eslint-disable camelcase */
import React, { useState } from 'react';
import ReactBodymovin from 'react-bodymovin';

import footer_placeholder from '@/assets/images/footer_placeholder.png';

import animationData from '@/assets/animations/animacion.json';

import { Centered } from '@/components/layout/helpers';

import {
  FooterWrapper,
  FooterTitle,
  FooterContent,
  FooterFigure,
  FooterContactList,
  FooterContactListItem,
  FooterContactListItemLabel,
  FooterContactListItemLink,
} from './Footer.styled';

const Footer = () => {
  const contactList = [
    {
      key: 'contact.email',
      label: 'Email',
      display: 'ycarolina.sguzman@gmail.com',
      href: 'mailto:ycarolina.sguzman@gmail.com',
    },
    {
      key: 'contact.linkedin',
      label: 'LinkedIn',
      display: '@carolinaguzman',
      href: 'https://www.linkedin.com/in/carolina-guzm%C3%A1n-b77a8611b/',
    },
    {
      key: 'contact.phone',
      label: 'Phone',
      display: '+52 333 718 1739',
      href: 'tel:+523337181739',
    },
  ];

  const [isStoped, setStoped] = useState(false);
  const [isPaused, setPaused] = useState(false);

  const defaultAnimationOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animationData,
  };

  return (
    <FooterWrapper>
      <Centered>
        <FooterTitle>
          Thank you for reading. If you like to discuss more, please get in
          touch.
        </FooterTitle>
        <FooterContent>
          <FooterFigure>
            <ReactBodymovin options={defaultAnimationOptions} />
          </FooterFigure>
          <FooterContactList>
            {contactList.map((item) => (
              <FooterContactListItem key={item.key}>
                <FooterContactListItemLabel>
                  {`${item.label}:`}
                </FooterContactListItemLabel>
                <FooterContactListItemLink href={item.href} target="_blank">
                  {item.display}
                </FooterContactListItemLink>
              </FooterContactListItem>
            ))}
          </FooterContactList>
        </FooterContent>
      </Centered>
    </FooterWrapper>
  );
};

export default Footer;
