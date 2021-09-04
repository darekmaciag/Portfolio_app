import React from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';


const ButtonIcon = styled(FaArrowUp)`
  font-size: 1.5rem;
  color: #fff;
`
  

const UpButton = styled.i`
  position: fixed;
  right: 1rem;
  background-color: ${props => props.theme.firstColor};
  opacity: .8;
  padding: 0 .3rem;
  border-radius: .4rem;
  z-index: var(--z-tooltip);
  transition: .4s;
  cursor: pointer;
  bottom: ${({scrollNav}) => (scrollNav ? '4rem' : '-20%')};
  
  &:hover{
    background-color: ${props => props.theme.firstColorAlt};
  }

  @media screen and (max-width: 767px){
    bottom: ${({isOpen,scrollNav}) => (isOpen && scrollNav ? '15rem' : scrollNav ? '4rem' : '-20%')};
  }
  `
  

export function ScrollUpButton({scrollNav, isOpen}) {

  const toggleHome = () => {
      scroll.scrollToTop();
  }

return (
    <UpButton scrollNav={scrollNav} isOpen={isOpen} onClick={toggleHome}>
        <ButtonIcon />
    </UpButton>
);
}