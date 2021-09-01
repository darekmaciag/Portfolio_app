import React, { useState } from "react";
import styled from "styled-components";
import DynamicIcon from "./DynamicIcon";


export const ThemeButton = styled.div`
  font-size: 1.25rem;
  color: ${props => props.theme.titleColor};
  margin-right: var(--mb-1);
  cursor: pointer;

  &:hover{
    color: ${props => props.theme.firstColor};
  }

  @media screen and (min-width: 768px){
  margin: 0;
  margin-left: 2.5rem;
  }
`
  

export function ChangeThemeButton() {
    const [toggleTheme, setToggleTheme] = useState(false)
    const [icona, setIcona] = useState('FaSun')

    const toggle = () => {
        setToggleTheme(!toggleTheme)
        if (toggleTheme === true){
            setIcona('FaSun')
            return "light"
        }else{setIcona('FaMoon')
      return"dark"}
    }

  return (
      <ThemeButton onClick={toggle} >
          <DynamicIcon icon={icona} />
      </ThemeButton>
  );
}