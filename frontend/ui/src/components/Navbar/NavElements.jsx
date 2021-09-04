import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


export const NavHeader = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-index);
  background-color: ${({scrollNav}) => (scrollNav ? props => props.theme.bodyColor : 'transparent')};
  box-shadow: ${({scrollNav}) => (scrollNav ? '0 -1px 4px rgba(0,0,0,.15)' : 'none')};
  border-radius: ${({scrollNav}) => (scrollNav ? '1.5rem 1.5rem 0 0' : 'none')};
  transition: .3s;

  @media screen and (min-width: 768px){
    top: 0;
    bottom: initial;
    padding: 0 1rem;
    border-radius: 0;
  }

  @media screen and (min-width: 1024px){
        padding: 0;
  }
`

export const Nav = styled.nav`
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 350px){
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }

  @media screen and (min-width: 768px){
    margin-left: auto;
    margin-right: auto;
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 1rem;
  }

  @media screen and (min-width: 1024px){
    padding: 0;
  }

`

export const NavMenu = styled.div`
  @media screen and (max-width: 350px){
    padding: 2rem .25rem 4rem;
  }

  @media screen and (max-width: 767px){
      position: fixed;
      bottom: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
      left: 0;
      width: 100%;
      background-color: ${props => props.theme.bodyColor};
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0,0,0,.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: .3s;
      margin-left: auto;
  }
  @media screen and (min-width: 768px){
    margin-left: auto;
  }
`

export const NavList = styled.ul`
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  display: grid;
  list-style: none;

  @media screen and (max-width: 350px){
    column-gap: 0;
  }

  @media screen and (min-width: 768px){
    display: flex;
    column-gap: 2rem;
  }
`

export const NavItem = styled.li`
  cursor: pointer;
`

export const NavIcon = styled.i`
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(LinkS)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-medium);
  &:hover {
    color: ${props => props.theme.firstColor};
  }

  &.active {
    color: ${props => props.theme.firstColor};
    }
`

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
`

export const NavToggle = styled.div`
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-medium);
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.firstColor};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavClose = styled.i`
  position: absolute;
  right: 1.3rem;
  bottom: .5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.firstColor};

  &:hover{
    color: ${props => props.theme.firstColorAlt}
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLogo = styled.i`
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-medium);
  cursor: pointer;

  &:hover{
    color: ${props => props.theme.firstColor};
  }
`

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