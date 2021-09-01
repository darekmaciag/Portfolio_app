import React from 'react';
import styled from "styled-components";


const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-semi-bold);
  font-size: var(--h1-font-size);
`;

const SectionSubtitle = styled.span`
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);
  text-align: center;

  @media screen and (min-width: 768px){
    margin-bottom: 4rem;
  }
`;

export function TitleSection({title,subtitle}) {

    return (
        <>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        </>
    );
};
