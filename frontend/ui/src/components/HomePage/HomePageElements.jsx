import { FaArrowDown, FaMouse } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -10;

    :before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(${props => props.theme.vidbg1}, ${props => props.theme.vidbg2});
      mix-blend-mode: multiply;
      opacity: 0.75;
      z-index: 2;
    }
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    filter: blur(3px);
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HomeSection = styled.section`
    padding: 2rem 0 4rem;
    height: 100vh;

  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`
export const HomeContainer = styled.div`
  gap: 1rem;
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;
  z-index: 1;

  @media screen and (max-width: 350px){
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }

  @media screen and (min-width: 768px){
    row-gap: 5rem;
    margin-left: auto;
    margin-right: auto;
  }

`
export const HomeContent = styled.div`
   grid-template-columns: .5fr 3fr;
   padding-top: 3.5rem;
   align-items: center;
   display: grid;
   gap: 1.5rem;
   z-index: 2;

  @media screen and (max-width: 350px){
    grid-template-columns: .25fr 3fr;
  }

  @media screen and (min-width: 568px){
    grid-template-columns: max-content 1fr 1fr; 
  }

  @media screen and (min-width: 768px){
    padding-top: 5.5rem;
    column-gap: 2rem;
  }
`
export const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  @media screen and (min-width: 1024px){
    transform: translateX(-6rem);
  }
`
export const HomeSocialIcon = styled.a`
  font-size: 1.2rem;
  color: ${props => props.theme.firstColor};

  &:hover{
    color: ${props => props.theme.firstColorAlt};
}
`

export const HomeImg = styled.div`
  @media screen and (min-width: 568px){
    order: 1;
    justify-self: center;
  }
`
export const HomeSvg = styled.svg`
  width: 200px;
  fill: ${props => props.theme.firstColor};

  @media screen and (max-width: 350px){
    width: 180px;
  }

  @media screen and (min-width: 768px){
    width: 270px;
  }

  @media screen and (min-width: 1024px){
    width: 320px;
  }
`

export const ImageBlob = styled.image`
  width: 210px;
`


export const HomeData = styled.div`
 grid-column: 1/3;
 z-index: 3;

 @media screen and (min-width: 568px){
    grid-column: initial;
  }
`
export const HomeTitle = styled.h1`
  font-size: var(--big-font-size);
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-semi-bold);
`
export const HomeSubtitle = styled.h3`
  font-size: var(--h3-font-size);
  color: ${props => props.theme.textColor};
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-75);
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-semi-bold);
`
export const HomeDescriptions = styled.p`
  margin-bottom: var(--mb-2);
`

export const HomeScroll = styled.div`
  display: none;
  z-index: 2;

  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const HomeScrollButton = styled(Link)`
  color: ${props => props.theme.firstColor};
  transition: .3s;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    transform: translateY(.25rem);
  }

  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
`

export const HomeScrollMouse = styled(FaMouse)`
  font-size: 2rem;
`

export const HomeScrollName = styled.span`
  font-size: var(--small-font-size);
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-medium);
  margin-right: var(--mb-0-25);
`

export const HomeScrollArrow = styled(FaArrowDown)`
 font-size: 1.25;
`

export const ParticleBg = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  overflow: visible;
  background-image: linear-gradient(to left, ${props => props.theme.color1}, ${props => props.theme.color2}, ${props => props.theme.color3}, ${props => props.theme.color4}, ${props => props.theme.color5});
  z-index: 0;
`
