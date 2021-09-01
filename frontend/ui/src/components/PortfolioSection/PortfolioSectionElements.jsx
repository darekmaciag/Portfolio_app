import { ButtonIcon,ButtonTheme } from '../ButtonElements';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/swiper-bundle'

export const PortfolioSectionWrapper = styled.section`
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
  }
`

export const PortfolioContainer = styled(Swiper)`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  height: 200px;
    

  @media screen and (max-width: 350px){
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }

  @media screen and (min-width: 768px){
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1024px) {
    .swiper-button-prev{
      left: -3.5rem;
    }
    .swiper-button-next{
      right: -3.5rem;
    }
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    bottom: 0 !important;
  }

  .swiper-button-prev{
    outline: none;
    left: -.5rem;
    color: ${props => props.theme.firstColor};

    &::after{
      font-size: 1.25rem;
    }
  }

  .swiper-button-next{
    outline: none;
    right: -.5rem;
    color: ${props => props.theme.firstColor};

    &::after{
      font-size: 1.25rem;
    }
 }

 .swiper-pagination-bullet{
  outline: none;
 }

 .swiper-pagination-bullet-active{
  background-color: ${props => props.theme.firstColor};
  }

 .swiper-container-horizontal > * .swiper-pagination-bullets{
  bottom: -2.5rem;
 }

`

export const PortfolioContent = styled.div`
  padding: 0 1.5rem;
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 568px){
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: 768px){
    align-items: center;
  }

  @media screen and (min-width: 1024px){
    column-gap: 5rem;
  }
`

export const PortfolioData = styled.div`
`

export const PortfolioImg = styled.img`
  max-width: 100%;
  height: auto;
  width: 265px;
  border-radius: .5rem;
  justify-content: center;

  @media screen and (min-width: 768px){
    width: 320px;
  }
`

export const PortfolioTitle = styled.h3`
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-semi-bold);
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
`

export const PortfolioDescriptions = styled.p`
  margin-bottom: var(--mb-0-75);
`

export const PortfolioButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: .75rem 1rem;
  border-radius: .5rem;
  font-weight: var(--font-medium);
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  transition: all .2s ease-in-out;
  color: #fff;
  background-color: ${props => props.theme.firstColor};

  
  &:hover{
      transition: all .2s ease-in-out;
      color: #fff;
      background-color: ${props => props.theme.firstColorAlt};
  }
`

export const PortfolioButtonIcon = styled(ButtonIcon)`
  ${PortfolioButton}:hover &{
    transform: translateX(.25rem);
  }
`
