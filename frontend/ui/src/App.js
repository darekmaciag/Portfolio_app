import React, { useState,useEffect } from 'react';
import './App.css';
import Home from './pages';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useDarkMode } from './components/UseDarkMode';
import { themes } from './theme';
import DynamicIcon from './components/DynamicIcon';
import { animateScroll as scroll } from 'react-scroll';
import { Nav,
        NavHeader,
        NavLogo,
        NavList,
        NavMenu,
        NavItem,
        NavIcon,
        NavLink,
        NavButtons,
        NavToggle,
        NavClose,ThemeButton } from './components/Navbar/NavElements';
import { ScrollUpButton } from './components/ScrollToTopButton';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }

html{
  scroll-behavior: smooth;
}

body{
  margin: 0 0 var(--header-height) 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color:${props => props.theme.bodyColor};
  color:${props => props.theme.textColor};
}

@media screen and (min-width: 768px) {

  body{
    margin: 0;
  }
}


::-webkit-scrollbar{
  width: .60rem;
  background-color: ${props => props.theme.scrollBarColor};
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb{
  background-color: ${props => props.theme.scrollThumbColor};
  border-radius: .5rem;
}
`


function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? themes.light : themes.dark;
  const icona = theme === 'light' ? 'FaSun' : 'FaMoon';
  const [isOpen, setIsOpen] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
      if(window.scrollY >= 80) {
          setScrollNav(true)
      } else {
          setScrollNav(false)
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  }, []);


  const toggle = () => {
      setIsOpen(!isOpen)
  }

  const toggleHome = () => {
      scroll.scrollToTop();
  }

  return (
    <ThemeProvider theme={themeMode}>
    <GlobalStyle/>
      <NavHeader scrollNav={scrollNav}>
          <Nav>
              <NavLogo onClick={toggleHome}>
                  dae43
              </NavLogo>
              <NavMenu isOpen={isOpen}>
                  <NavList>
                      <NavItem>
                          <NavLink to="home"
                              smooth={false}
                              duration={200}
                              spy={true}
                              exact='true'
                              onClick={toggle}><NavIcon><DynamicIcon icon="FaHome" /></NavIcon>Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="about"
                              smooth={false}
                              duration={200}
                              spy={true}
                              exact='true'
                              onClick={toggle}><NavIcon><DynamicIcon icon="FaUser" /></NavIcon>About</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="skills"
                              smooth={false}
                              duration={200}
                              spy={true}
                              exact='true'
                              onClick={toggle}><NavIcon><DynamicIcon icon="FaList" /></NavIcon>Skills</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="services" 
                              smooth={false}
                              duration={200}
                              spy={true}
                              exact='true'
                              onClick={toggle}><NavIcon><DynamicIcon icon="FaBriefcase" /></NavIcon>Services</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="portfolio"
                              smooth={false}
                              duration={200}
                              spy={true}
                              exact='true'
                              onClick={toggle}><NavIcon><DynamicIcon icon="FaImages" /></NavIcon>Portfolio</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="contact"
                              smooth={false}
                              duration={200}
                              spy={true}
                              exact='true'
                              onClick={toggle}><NavIcon><DynamicIcon icon="FaEnvelope" /></NavIcon>Contact</NavLink>
                      </NavItem>
                  </NavList>
                  <NavClose onClick={toggle}><NavIcon><DynamicIcon icon="FaTimes" /></NavIcon></NavClose>
              </NavMenu>
              <NavButtons>
              <ThemeButton onClick={themeToggler}><DynamicIcon icon={icona}/></ThemeButton>
                  <NavToggle onClick={toggle}>
                      <DynamicIcon icon="FaBars" />
                  </NavToggle>
              </NavButtons>
          </Nav>
          <ScrollUpButton scrollNav={scrollNav} isOpen={isOpen} />
      </NavHeader>
                    <Home />
      </ThemeProvider>

  );
}

export default App;