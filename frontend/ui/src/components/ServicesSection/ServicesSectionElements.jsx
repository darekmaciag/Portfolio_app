import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import { ButtonTheme } from '../ButtonElements';


export const ServiceSectionWrapper = styled.section`
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
  }
`

export const ServiceContainer = styled.div`
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;

  @media screen and (max-width: 350px){
    grid-template-columns: max-content;
    justify-content: center;
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
  
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(3, 218px);
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(3, 238px);
  }
`

export const ServiceContent = styled.div`
  position: relative;
  background-color: ${props => props.theme.containerColor};
  padding: 3.5rem .5rem 1.25rem 1.5rem;
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  transition: .3s;

  &:hover{
  box-shadow: 0 4px 8px rgba(0,0,0,.15);
}

  @media screen and (max-width: 350px){
    padding-right: 3.5rem;
  }
  
  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem 2.5rem;
  }

`

export const ServicesIcon = styled.i`
  display: block;
  font-size: 1.5rem;
  color: ${props => props.theme.firstColor};
  margin-bottom: var(--mb-1);

  @media screen and (min-width: 768px){
    font-size: 2rem;
  }
`

export const ServicesTitle = styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
`

export const ServicesButton = styled.span`
  color: #fff;
  border-radius: .5rem;
  font-weight: var(--font-medium);
  display: inline-flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  color: ${props => props.theme.firstColor};
  cursor: pointer;
  font-size: var(--small-font-size);

  &:hover{
    background-color: transparent;
    color: ${props => props.theme.firstColorAlt};
  }
`

export const ServicesButtonArrow = styled(FaArrowRight)`
  font-size: 1rem;
  margin-left: var(--mb-0-5);
  transition: .3s;
  
  ${ButtonTheme}:hover &{
    transform: translateX(.25rem);
  }
`

export const ServicesModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  transition: .3s;

  @media screen and (max-width: 350px){
    padding: 0 .5rem;
  }
`

export const ServicesModal1 = styled(ServicesModal)`
  opacity: ${({ openModal1 }) => (openModal1 ? '0' : '1')};
  visibility: ${({ openModal1 }) => (openModal1 ? 'hidden' : 'visible')};
`

export const ServicesModal2 = styled(ServicesModal)`
  opacity: ${({ openModal2 }) => (openModal2 ? '0' : '1')};
  visibility: ${({ openModal2 }) => (openModal2 ? 'hidden' : 'visible')};
`

export const ServicesModal3 = styled(ServicesModal)`
  opacity: ${({ openModal3 }) => (openModal3 ? '0' : '1')};
  visibility: ${({ openModal3 }) => (openModal3 ? 'hidden' : 'visible')};
`


export const ServicesModalContent = styled.div`
  position: relative;
  background-color: ${props => props.theme.containerColor};
  padding: 1.5rem;
  border-radius: .5rem;

  @media screen and (min-width: 768px){
    width: 450px;
  }

`

export const ServicesModalTitle = styled.h4`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1-5);
`

export const ServicesModalClose = styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: ${props => props.theme.firstColor};
  cursor: pointer;
`

export const ServicesModalGrid = styled.ul`
 list-style: none;
 row-gap: 1rem;
 display: grid;
 gap: 1.5rem;
`

export const ServicesModalIcon = styled.i`
  color: ${props => props.theme.firstColor};
  margin-right: var(--mb-0-25);
`

export const ServicesModalDescription = styled.p`
`

export const ServicesModalService = styled.li`
  display: flex;
`
