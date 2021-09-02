import React, { useEffect, useState } from 'react';
import DynamicIcon from '../DynamicIcon';
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
        NavClose } from './NavElements';
import { ScrollUpButton } from '../ScrollToTopButton';
import { ChangeThemeButton } from '../ChangeThemeButton';

const Navbar = () => {
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
                    <ChangeThemeButton />
                    <NavToggle onClick={toggle}>
                        <DynamicIcon icon="FaBars" />
                    </NavToggle>
                </NavButtons>
            </Nav>
            <ScrollUpButton scrollNav={scrollNav} isOpen={isOpen} />
        </NavHeader>
    );
};

export default Navbar;
