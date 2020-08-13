import React from 'react';

import { Centered } from '@/components/layout/helpers';

import logo_aruba from '@/assets/images/collaborators/logo_aruba.png';
import logo_dxc from '@/assets/images/collaborators/logo_dxc.png';
import logo_gjc from '@/assets/images/collaborators/logo_gjc.png';
import logo_itexico from '@/assets/images/collaborators/logo_itexico.png';
import logo_rainforrent from '@/assets/images/collaborators/logo_rainforrent.png';
import logo_softtek from '@/assets/images/collaborators/logo_softtek.png';

import {
  CollaboratorsWrapper,
  CollaboratorsTitle,
  CollaboratorsGrid,
  CollaboratorsItem,
  CollaboratorsItemPicture,
} from './Collaborators.styled';

const Collaborators = () => {
  const collaborators = [
    {
      key: 'collaborator.dxc',
      name: 'DXC.technology',
      picture: logo_dxc,
      url: '#',
    },
    {
      key: 'collaborator.softtek',
      name: 'Softtek',
      picture: logo_softtek,
      url: '#',
    },
    {
      key: 'collaborator.aruba',
      name: 'Aruba, a HP Enterprise Company',
      picture: logo_aruba,
      url: '#',
    },
    {
      key: 'collaborator.rainforrent',
      name: 'Rain For Rent',
      picture: logo_rainforrent,
      url: '#',
    },
    {
      key: 'collaborator.itexico',
      name: 'iTexico, an Improving company',
      picture: logo_itexico,
      url: '#',
    },
    {
      key: 'collaborator.gjc',
      name: "Gloria Jean's Coffees",
      picture: logo_gjc,
      url: '#',
    },
  ];

  return (
    <CollaboratorsWrapper>
      <Centered>
        <CollaboratorsTitle>I have collaborated with:</CollaboratorsTitle>
        <CollaboratorsGrid>
          {collaborators.map((collaborator) => (
            <CollaboratorsItem key={collaborator.key} href={collaborator.url}>
              <CollaboratorsItemPicture
                src={collaborator.picture}
                alt={collaborator.name}
              />
            </CollaboratorsItem>
          ))}
        </CollaboratorsGrid>
      </Centered>
    </CollaboratorsWrapper>
  );
};

export default Collaborators;
