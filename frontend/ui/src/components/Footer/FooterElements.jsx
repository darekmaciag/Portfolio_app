import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const FooterSectionWrapper = styled.footer`
  padding-top: 2rem;
`

export const FooterContainer = styled.div`
  row-gap: 3.5rem;
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;

  
  @media screen and (max-width: 350px){
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
  
  @media screen and (min-width: 568px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px){
    grid-template-columns: repeat(3, 1fr);
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }

  @media screen and (min-width: 1024px){
    padding: 0;
  }
`

export const FooterBg = styled.div`
  background-color: ${props => props.theme.firstColorSecond};
  padding: 2rem 0 3rem;

  @media screen and (min-width: 768px){
    padding: 3rem 0 3,5rem;
  }
`

export const FooterTitle = styled.h1`
  font-weight: var(--font-semi-bold);
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-25);
  color: #fff;
`

export const FooterSubtitle = styled.span`
  font-size: var(--small-font-size);
  color: #fff;
`

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media screen and (min-width: 768px){
    flex-direction: row;
    column-gap: 2rem;
  }
`

export const FooterLink = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  

  &:hover{
    color: ${props => props.theme.firstColorLighter};
  }
`

export const FooterSocials = styled.div`
  @media screen and (min-width: 768px){
    justify-self: flex-end;
  }
`

export const FooterSocial = styled.a`
  font-size: 1.5rem;
  margin-right: var(--mb-1-5);
  color: #fff;

  &:hover{
  color: ${props => props.theme.firstColorLighter};
  }
`

export const FooterCopy = styled.p`
  font-size: var(--smaller-font-size);
  text-align: center;
  color: ${props => props.theme.textColorLight};
  margin-top: var(--mb-3);

  @media screen and (min-width: 768px){
    margin-top: 4.5rem;
  }
`

