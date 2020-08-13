import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #f8f8f8;
  overflow: hidden;
  padding-bottom: 3rem;
`;

export const FooterTitle = styled.h2`
  margin-top: 7.5rem;
  margin-bottom: 1rem;
  font-size: 3.75rem;
  font-weight: bold;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 7rem;
`;

export const FooterFigure = styled.figure`
  flex: none;
  width: 32rem;
`;

export const FooterContactList = styled.div`
  flex: none;
  width: 40rem;
  display: flex;
  flex-direction: column;
`;

export const FooterContactListItem = styled.div`
  display: flex;
  font-size: 1.875rem;
  margin: 1rem;
`;

export const FooterContactListItemLabel = styled.span`
  flex: none;
  width: 12rem;
`;

export const FooterContactListItemLink = styled.a`
  color: #050038;
`;
