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
  bottom: ${({scrollNav}) => (scrollNav ? '5rem' : '-20%')};
  background-color: ${props => props.theme.firstColor};
  opacity: .8;
  padding: 0 .3rem;
  border-radius: .4rem;
  z-index: var(--z-tooltip);
  transition: .4s;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.theme.firstColorAlt};
  }
`
  

export function ScrollUpButton({scrollNav}) {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
      <UpButton scrollNav={scrollNav} onClick={toggleHome}>
          <ButtonIcon />
      </UpButton>
  );
}